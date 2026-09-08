"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShiftSchema = exports.clockInSchema = void 0;
const zod_1 = require("zod");
exports.clockInSchema = zod_1.z.object({
    branchId: zod_1.z.string().cuid(),
});
exports.createShiftSchema = zod_1.z.object({
    userId: zod_1.z.string().cuid(),
    branchId: zod_1.z.string().cuid(),
    startTime: zod_1.z.coerce.date(),
    endTime: zod_1.z.coerce.date(),
});
