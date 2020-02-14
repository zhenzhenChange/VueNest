import { DbModule } from './../../db/src/db.module';
import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
