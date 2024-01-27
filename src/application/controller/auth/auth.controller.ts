import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../../core/abstract/auth-service';
import { Credentals } from '../../../core/dto/auth/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-in')
  authenticate(@Body() { email, password }: Credentals) {
    return this.authService.authenticate(email, password);
  }
}
