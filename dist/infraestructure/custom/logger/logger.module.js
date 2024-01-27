"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerModule = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("../../../core/abstract/logger-service");
const contants_1 = require("../../config/environment/contants");
const production_logger_service_1 = require("./production-logger.service");
const development_logger_service_1 = require("./development-logger.service");
const LoggerServiceProvider = {
    provide: logger_service_1.LoggerService,
    useClass: contants_1.PRODUCTION_MODE
        ? production_logger_service_1.ProductionLoggerService
        : development_logger_service_1.DevelopmentLoggerService,
};
let LoggerModule = LoggerModule_1 = class LoggerModule {
    static forRoot() {
        return {
            module: LoggerModule_1,
            providers: [LoggerServiceProvider],
            exports: [LoggerServiceProvider],
        };
    }
};
exports.LoggerModule = LoggerModule;
exports.LoggerModule = LoggerModule = LoggerModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [LoggerServiceProvider],
        exports: [LoggerServiceProvider],
    })
], LoggerModule);
//# sourceMappingURL=logger.module.js.map