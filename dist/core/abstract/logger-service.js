"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
class LoggerService extends common_1.Logger {
    constructor(context) {
        super(context);
    }
    setContext(context) {
        this.context = context;
    }
}
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger-service.js.map