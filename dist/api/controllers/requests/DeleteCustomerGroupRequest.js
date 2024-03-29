"use strict";
/*
 * spurtcommerce API
 * version 3.0.1
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerGroupRequest = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class DeleteCustomerGroupRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], DeleteCustomerGroupRequest.prototype, "groupId", void 0);
exports.DeleteCustomerGroupRequest = DeleteCustomerGroupRequest;
//# sourceMappingURL=DeleteCustomerGroupRequest.js.map