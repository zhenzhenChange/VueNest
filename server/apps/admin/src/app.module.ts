import { DbModule } from './../../../libs/db/src/db.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import MAO = require('multer-aliyun-oss');
import { CommonModule } from '@app/common';

@Module({
  imports: [
    CommonModule,
    UsersModule,
    CoursesModule,
    EpisodesModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              bucket: process.env.OSS_BUCKET,
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
            },
          }),
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
