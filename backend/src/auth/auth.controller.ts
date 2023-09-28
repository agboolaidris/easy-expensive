import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  InternalServerErrorException,
  UseInterceptors,
  ClassSerializerInterceptor,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto, SignUpAuthDto } from './dto/auth.dto';
import { Response } from 'express';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(new ValidationPipe())
  async signup(@Body() createAuthDto: SignUpAuthDto) {
    try {
      const response = await this.authService.signup(createAuthDto);
      return response;
    } catch (error) {
      if (error?.detail) throw new BadRequestException([error.detail]);
      throw new InternalServerErrorException(error);
    }
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async signIn(@Body() signInAuthDto: SignInAuthDto, @Res() res: Response) {
    const { accessToken, user } = await this.authService.signIn(signInAuthDto);
    res.status(200).json({ accessToken, user });
  }
}
