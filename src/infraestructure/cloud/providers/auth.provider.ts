import { AuthService } from '../../../core/abstract/auth-service';
import { PRODUCTION_MODE } from '../../config/environment/contants';
import { MockAuthService } from '../mock/auth/auth.service';
import { OracleAuthService } from '../oracle/auth/auth.service';

export const AuthServiceProvider = {
  provide: AuthService,
  useClass: PRODUCTION_MODE ? OracleAuthService : MockAuthService,
};
