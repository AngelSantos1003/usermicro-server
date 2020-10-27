import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  private logger = new Logger('AppController');


  constructor(private mathService: MathService) {}


  @MessagePattern('add')

  async accumulate(data: number[])  {
    this.logger.log('Adding ' + data.toString()); 
    return this.mathService.accumulate(data); 
  }

  @MessagePattern('Bash')
  async proccessBash(data: any[])  {
    this.logger.log('Adding Bash'); 
    
    const dataResult = await this.mathService.Add(data); 
    // this.service.createdUsers(dataResult);
    return dataResult;
    // console.log('agregar');
  }
}
