"use strict";
/*
 * spurtcommerce API
 * version 3.0.1
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePassword = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class ChangePassword {
}
tslib_1.__decorate([
    class_validator_1.MinLength(5, {
        message: 'Old Password is minimum 5 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], ChangePassword.prototype, "oldPassword", void 0);
tslib_1.__decorate([
    class_validator_1.MinLength(5, {
        message: 'New Password is minimum 5 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'New Password is required',
    }),
    tslib_1.__metadata("design:type", String)
], ChangePassword.prototype, "newPassword", void 0);
exports.ChangePassword = ChangePassword;
//# sourceMappingURL=changePasswordRequest.js.map