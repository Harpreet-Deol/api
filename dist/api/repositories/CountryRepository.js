"use strict";
/*
 * spurtcommerce API
 * version 3.0.1
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Country_1 = require("../models/Country");
let CountryRepository = class CountryRepository extends typeorm_1.Repository {
};
CountryRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Country_1.Country)
], CountryRepository);
exports.CountryRepository = CountryRepository;
//# sourceMappingURL=CountryRepository.js.map