import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { SignInAuthDto, SignUpAuthDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  private GenerateAccessToken(user: User) {
    return this.jwtService.signAsync(
      { uuid: user.uuid },
      {
        secret: this.configService.get('ACCESS_TOKEN_JWT_SECRET'),
      },
    );
  }

  signup(createAuthDto: SignUpAuthDto) {
    return this.userService.create(createAuthDto);
  }

  async signIn({ email, password }: SignInAuthDto) {
    const user = await this.userService.findOneByEmail(email);
    if (!user)
      throw new BadRequestException(["Email or password doesn't match"]);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      throw new BadRequestException(['email or password is invalid']);
    return {
      user,
      accessToken: await this.GenerateAccessToken(user),
    };
  }
}
