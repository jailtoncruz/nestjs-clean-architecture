import { Injectable } from "@nestjs/common";
import { LoggerService } from "../../../../core/abstract/logger-service";
import { AuthService } from "../../../../core/abstract/auth-service";
import { AuthenticationDTO } from "../../../../core/dto/auth/authentication";
import { randomUUID } from "crypto";

@Injectable()
export class MockAuthService extends AuthService {
  constructor(private logger: LoggerService) {
    super();
    this.logger.setContext(MockAuthService.name);
  }

  async authenticate(
    login: string,
    password: string,
  ): Promise<AuthenticationDTO> {
    const bluredPassword = "".padStart(password?.length, "*");
    this.logger.log(`Authenticating with [${login}] and [${bluredPassword}]`);
    return {
      access: {
        token: randomUUID(),
        expiredAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    };
  }
}
