import { LoggerService } from '../../../../core/abstract/logger-service';
import { AuthService } from '../../../../core/abstract/auth-service';
import { AuthenticationDTO } from '../../../../core/dto/auth/authentication';
export declare class MockAuthService extends AuthService {
    private logger;
    constructor(logger: LoggerService);
    authenticate(login: string, password: string): Promise<AuthenticationDTO>;
}
