import { Injectable } from "@nestjs/common";
import { AuthService } from "../../../../core/abstract/cloud-services/auth-service";
import { LoggerService } from "../../../../core/abstract/logger-service";
import { AuthenticationDTO } from "../../../../core/dto/auth/authentication";
import { randomUUID } from "crypto";

@Injectable()
export class OracleAuthService extends AuthService {
  constructor(private logger: LoggerService) {
    super();
    this.logger.setContext(OracleAuthService.name);
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
        expiredAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      },
    };
  }
}
