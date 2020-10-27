import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import {FileMiddleware} from './users-file.middleware'
import { MulterModule } from '@nestjs/platform-express';
import { MathService } from '../math.service';
import {MathServiceUsers } from './math-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MulterModule.register({
    dest: './files',
  })],
  providers: [UsersService, MathService, MathServiceUsers],
  controllers: [UsersController]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FileMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.POST });
  }
}
