import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks() {
    return this.prisma.task.findMany();
  }

  async addTask(data: Task) {
    return this.prisma.task.create({ data });
  }

  async updateTask(id: number, data: Task) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
