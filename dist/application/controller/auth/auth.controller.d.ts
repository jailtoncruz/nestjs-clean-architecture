import { AuthService } from '../../../core/abstract/auth-service';
import { Credentals } from '../../../core/dto/auth/credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    authenticate({ email, password }: Credentals): Promise<import("../../../core/dto/auth/authentication").AuthenticationDTO>;
}
