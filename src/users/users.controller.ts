import { Controller, Post ,Body, UploadedFile, UseInterceptors, Logger} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CrearUser } from './dto/created-user';
import { User } from './user.entity';
import { MathServiceUsers } from './math-users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
    constructor(private service: UsersService, private mathService: MathServiceUsers) { }
    private logger = new Logger('AppController');

    @MessagePattern('BashUsers')
    async proccessBash(data: any[])  {
      this.logger.log('Adding Bash'); 
      const dataResult = this.mathService.Add(data); 
      this.service.createdUsers(dataResult);
      return dataResult;
      // console.log('agregar');
    }
}
