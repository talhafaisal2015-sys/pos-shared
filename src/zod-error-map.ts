import { z, ZodIssueCode, type ZodErrorMap } from 'zod';

/**
 * Replaces zod's default English messages ("String must contain at least 1
 * character(s)", "Required", "Invalid cuid") with plain-language ones derived
 * from the field name. Schema-level messages (e.g. `.min(1, 'Name is required')`)
 * always take priority over this map, so existing custom messages are untouched.
 */

const FIELD_LABEL_OVERRIDES: Record<string, string> = {
  ntn: 'NTN',
  cnic: 'CNIC',
  sku: 'SKU',
  otp: 'OTP',
};

function fieldLabel(path: (string | number)[]): string {
  const segment = [...path].reverse().find((p): p is string => typeof p === 'string');
  if (!segment) return 'This field';

  const override = FIELD_LABEL_OVERRIDES[segment.toLowerCase()];
  if (override) return override;

  const words = segment
    .replace(/Id$/, '')
    .replace(/Url$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .trim()
    .toLowerCase();

  return words ? words.charAt(0).toUpperCase() + words.slice(1) : segment;
}

const friendlyErrorMap: ZodErrorMap = (issue, ctx) => {
  const label = fieldLabel(issue.path);

  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === 'undefined' || issue.received === 'null' || issue.received === 'nan') {
        return { message: `${label} is required.` };
      }
      return { message: `${label} is invalid.` };

    case ZodIssueCode.invalid_string:
      if (ctx.data === '') return { message: `${label} is required.` };
      if (issue.validation === 'email') return { message: 'Enter a valid email address.' };
      if (issue.validation === 'url') return { message: `${label} must be a valid URL.` };
      return { message: `${label} is invalid.` };

    case ZodIssueCode.too_small:
      if (issue.type === 'string') {
        return issue.minimum <= 1
          ? { message: `${label} is required.` }
          : { message: `${label} must be at least ${issue.minimum} characters.` };
      }
      if (issue.type === 'number') {
        if (issue.minimum === 0) {
          return { message: issue.inclusive ? `${label} cannot be negative.` : `${label} must be greater than 0.` };
        }
        return { message: `${label} must be at least ${issue.minimum}.` };
      }
      if (issue.type === 'array') {
        return { message: issue.minimum <= 1 ? 'Add at least one item.' : `Add at least ${issue.minimum} items.` };
      }
      if (issue.type === 'date') {
        return { message: `${label} is too early.` };
      }
      break;

    case ZodIssueCode.too_big:
      if (issue.type === 'string') return { message: `${label} must be ${issue.maximum} characters or fewer.` };
      if (issue.type === 'number') return { message: `${label} must be ${issue.maximum} or less.` };
      if (issue.type === 'array') return { message: `You can add at most ${issue.maximum} items.` };
      break;

    case ZodIssueCode.invalid_enum_value:
      return { message: `${label} is invalid.` };

    case ZodIssueCode.invalid_date:
      return { message: `${label} must be a valid date.` };

    default:
      break;
  }

  return { message: ctx.defaultError };
};

z.setErrorMap(friendlyErrorMap);
