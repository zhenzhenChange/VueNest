import { Course } from './../../../../libs/db/src/models/course.model';
import { Episode } from './../../../../libs/db/src/models/episode.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Episode,
})
@ApiTags('课时')
@Controller('episodes')
export class EpisodesController {
  constructor(
    @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
    @InjectModel(Course) private readonly CourseModel: ReturnModelType<typeof Course>,
  ) {}

  @Get('option')
  async option() {
    const dicData = (await this.CourseModel.find()).map(item => {
      return { label: item.CourseName, value: item._id };
    });
    return {
      title: '课时管理',
      translate: false,
      column: [
        { prop: 'SubordinateCourse', label: '所属课程', type: 'select', dicData, row: true },
        { prop: 'EpisodeName', label: '课时名称', row: true },
        {
          row: true,
          width: 120,
          type: 'upload',
          label: '课时文件',
          action: 'upload',
          prop: 'EpisodeFile',
          params: { is: 'video' },
          listType: 'picture-img',
        },
      ],
    };
  }
}
