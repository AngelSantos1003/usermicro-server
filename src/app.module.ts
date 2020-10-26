import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathService } from './math.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
