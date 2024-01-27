import { AuthService } from '../../../../core/abstract/auth-service';
import { LoggerService } from '../../../../core/abstract/logger-service';
import { AuthenticationDTO } from '../../../../core/dto/auth/authentication';
export declare class OracleAuthService extends AuthService {
    private logger;
    constructor(logger: LoggerService);
    authenticate(login: string, password: string): Promise<AuthenticationDTO>;
}
