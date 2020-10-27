import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathService } from './math.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
  controllers: [AppController],
  providers: [ MathService],
})
export class AppModule {}
