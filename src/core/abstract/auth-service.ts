import { AuthenticationDTO } from "../dto/auth/authentication";

export abstract class AuthService {
  authenticate(email: string, password: string): Promise<AuthenticationDTO> {
    throw new Error("Method not implemented ".concat(email + password));
  }
}
