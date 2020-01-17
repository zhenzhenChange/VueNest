import { User } from './../../../../libs/db/src/models/user.model'
import { Controller, Get } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: User
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}

  @Get('option')
  option() {
    return {
      title: '用户管理',
      column: [{ prop: 'username', label: '用户昵称' }]
    }
  }
}
