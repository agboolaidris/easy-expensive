import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Patch,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from './entities/user.entity';
import { PersonalInformationDto } from './dto/user-dto';

declare module 'express' {
  export interface Request {
    user: Partial<User>;
  }
}

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  allUsers() {
    return this.usersService.findAll();
  }

  @Get('me')
  @UseGuards(AuthGuard)
  getMe(@Req() req: any) {
    return this.usersService.findOneById(req.user.uuid);
  }

  @Patch('/personal-information')
  @UseGuards(AuthGuard)
  updateUserPersonalInformation(
    @Body() createAuthDto: PersonalInformationDto,
    @Req() req: any,
  ) {
    return this.usersService.findOneByIdAndUpdateUserInformation(
      req.user.uuid,
      createAuthDto,
    );
  }
}
