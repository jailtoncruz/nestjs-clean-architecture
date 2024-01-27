import { AuthService } from '../../../core/abstract/auth-service';
import { MockAuthService } from '../mock/auth/auth.service';
import { OracleAuthService } from '../oracle/auth/auth.service';
export declare const AuthServiceProvider: {
    provide: typeof AuthService;
    useClass: typeof MockAuthService | typeof OracleAuthService;
};
