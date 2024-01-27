import { Logger } from '@nestjs/common';
export declare abstract class LoggerService extends Logger {
    constructor(context: string);
    setContext(context: string): void;
}
