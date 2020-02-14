import { Course } from './../../../../libs/db/src/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Course,
})
@ApiTags('课程')
@Controller('courses')
export class CoursesController {
  constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>) {}

  @Get('option')
  option() {
    return {
      title: '课程管理',
      column: [
        { prop: 'CourseName', label: '课程名称', sortable: true, search: true, row: true },
        {
          width: 120,
          height: 'auto',
          type: 'upload',
          label: '课程封面',
          action: 'upload',
          prop: 'CourseCover',
          listType: 'picture-img',
        },
      ],
    };
  }
}
