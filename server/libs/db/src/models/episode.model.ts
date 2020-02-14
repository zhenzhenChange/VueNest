import { Course } from './course.model';
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Episode {
  @ApiProperty({ description: '课时名称' })
  @prop()
  EpisodeName: string;

  @ApiProperty({ description: '课时资源（视频、图片文件）' })
  @prop()
  EpisodeFile: string;

  @prop({ ref: 'Crouse' })
  SubordinateCourse: Ref<Course>;
}
