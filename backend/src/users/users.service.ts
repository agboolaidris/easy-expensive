import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, PersonalInformationDto } from './dto/user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findOneById(uuid: string) {
    return this.userRepository.findOneBy({ uuid });
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOneByIdAndUpdateUserInformation(
    uuid: string,
    { newPassword, currentPassword, fullName }: PersonalInformationDto,
  ) {
    const user = await this.userRepository.findOneBy({ uuid });

    if (newPassword) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);

      if (!isMatch) throw new BadRequestException(['password is invalid']);

      user.password = newPassword;
    }

    if (fullName) {
      user.fullName = fullName;
    }

    return this.userRepository.save(user);
  }
}
