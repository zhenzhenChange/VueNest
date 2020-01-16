import { Episode } from './episode.model'
import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop()
  CourseName: string

  @ApiProperty({ description: '课程封面' })
  @prop()
  CourseCover: string

  @ApiProperty({ description: '课程课时' })
  @arrayProp({ itemsRef: 'Episode' })
  CourseEpisodes: Array<Ref<Episode>>
}
