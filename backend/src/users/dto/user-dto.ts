export class CreateUserDto {
  fullName: string;
  email: string;
  password: string;
}

export class PersonalInformationDto {
  currentPassword?: string;
  newPassword?: string;
  fullName?: string;
}
