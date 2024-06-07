import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from '@prisma/client';

import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Post()
  async addTask(@Body() data: Task) {
    return this.taskService.addTask(data);
  }

  @Put(':id')
  async updateTask(@Body() data: Task) {
    return this.taskService.updateTask(Number(data.id), data);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(Number(id));
  }
}
