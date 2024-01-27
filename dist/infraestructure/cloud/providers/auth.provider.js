"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceProvider = void 0;
const auth_service_1 = require("../../../core/abstract/auth-service");
const contants_1 = require("../../config/environment/contants");
const auth_service_2 = require("../mock/auth/auth.service");
const auth_service_3 = require("../oracle/auth/auth.service");
exports.AuthServiceProvider = {
    provide: auth_service_1.AuthService,
    useClass: contants_1.PRODUCTION_MODE ? auth_service_3.OracleAuthService : auth_service_2.MockAuthService,
};
//# sourceMappingURL=auth.provider.js.map