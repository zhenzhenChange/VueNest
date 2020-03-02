import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ description: '昵称' })
  username: string;
  @ApiProperty({ description: '密码' })
  password: string;
}
