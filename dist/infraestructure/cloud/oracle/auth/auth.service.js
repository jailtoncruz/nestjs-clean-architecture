"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OracleAuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleAuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../../../core/abstract/auth-service");
const logger_service_1 = require("../../../../core/abstract/logger-service");
const crypto_1 = require("crypto");
let OracleAuthService = OracleAuthService_1 = class OracleAuthService extends auth_service_1.AuthService {
    constructor(logger) {
        super();
        this.logger = logger;
        this.logger.setContext(OracleAuthService_1.name);
    }
    async authenticate(login, password) {
        const bluredPassword = ''.padStart(password?.length, '*');
        this.logger.log(`Authenticating with [${login}] and [${bluredPassword}]`);
        return {
            access: {
                token: (0, crypto_1.randomUUID)(),
                expiredAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            },
        };
    }
};
exports.OracleAuthService = OracleAuthService;
exports.OracleAuthService = OracleAuthService = OracleAuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], OracleAuthService);
//# sourceMappingURL=auth.service.js.map