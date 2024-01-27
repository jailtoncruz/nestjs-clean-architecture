import { AuthenticationDTO } from '../dto/auth/authentication';
export declare abstract class AuthService {
    authenticate(email: string, password: string): Promise<AuthenticationDTO>;
}
