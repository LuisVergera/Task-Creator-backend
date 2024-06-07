import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  providers: [TaskService],
  imports: [PrismaModule],
  controllers: [TaskController],
})
export class TaskModule {}
