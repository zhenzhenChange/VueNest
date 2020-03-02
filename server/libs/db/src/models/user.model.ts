import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';

@modelOptions({
  schemaOptions: { timestamps: true },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'xiaozhenzhen' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: '3721' })
  @prop({
    select: false,
    get: val => val,
    set: val => (val ? hashSync(val) : val),
  })
  password: string;
}
