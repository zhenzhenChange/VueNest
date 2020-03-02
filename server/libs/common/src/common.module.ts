import { DbModule } from './../../db/src/db.module';
import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    JwtModule.registerAsync({
      useFactory: () => ({ secret: process.env.SECRET }),
    }),
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule],
})
export class CommonModule {}
