"use strict";
/*
 * spurtcommerce API
 * version 3.0.1
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePage = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class UpdatePage {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], UpdatePage.prototype, "pageId", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'title is required',
    }),
    tslib_1.__metadata("design:type", String)
], UpdatePage.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'content is required',
    }),
    tslib_1.__metadata("design:type", String)
], UpdatePage.prototype, "content", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], UpdatePage.prototype, "active", void 0);
exports.UpdatePage = UpdatePage;
//# sourceMappingURL=UpdatePageRequest.js.map