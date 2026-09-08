"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCustomerMessageSchema = exports.upsertIntegrationCredentialSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.upsertIntegrationCredentialSchema = zod_1.z.object({
    config: zod_1.z.record(zod_1.z.string(), zod_1.z.string()),
    isEnabled: zod_1.z.boolean(),
});
exports.sendCustomerMessageSchema = zod_1.z.object({
    channel: zod_1.z.nativeEnum(enums_1.CommunicationChannel),
    message: zod_1.z.string().min(1).max(1000),
});
