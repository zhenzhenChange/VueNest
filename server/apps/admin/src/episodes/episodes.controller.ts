import { Episode } from './../../../../libs/db/src/models/episode.model'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'

@Crud({
  model: Episode
})
@ApiTags('课时')
@Controller('episodes')
export class EpisodesController {
  constructor(@InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>) {}
}
