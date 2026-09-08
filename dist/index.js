"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./zod-error-map");
__exportStar(require("./enums"), exports);
__exportStar(require("./permissions"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./entities"), exports);
__exportStar(require("./schemas/auth"), exports);
__exportStar(require("./schemas/users"), exports);
__exportStar(require("./schemas/branches"), exports);
__exportStar(require("./schemas/organization"), exports);
__exportStar(require("./schemas/categories"), exports);
__exportStar(require("./schemas/products"), exports);
__exportStar(require("./schemas/suppliers"), exports);
__exportStar(require("./schemas/customers"), exports);
__exportStar(require("./schemas/inventory"), exports);
__exportStar(require("./schemas/sales"), exports);
__exportStar(require("./schemas/cash-register"), exports);
__exportStar(require("./schemas/credits"), exports);
__exportStar(require("./schemas/purchases"), exports);
__exportStar(require("./schemas/expenses"), exports);
__exportStar(require("./schemas/staff"), exports);
__exportStar(require("./schemas/integrations"), exports);
__exportStar(require("./schemas/platform"), exports);
