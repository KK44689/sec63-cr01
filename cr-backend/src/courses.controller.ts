import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll():any{
    return {
        message:'HelloWorld'
    };
  }
}
