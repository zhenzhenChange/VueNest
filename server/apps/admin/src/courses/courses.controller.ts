import { Course } from './../../../../libs/db/src/models/course.model'
import { Controller } from '@nestjs/common'
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: Course
})
@ApiTags('课程')
@Controller('courses')
export class CoursesController {
  constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>) {}
}
