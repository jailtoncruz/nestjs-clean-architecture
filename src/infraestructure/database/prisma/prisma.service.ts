import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { DatabaseService } from "../../../core/abstract/database/database-service";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, DatabaseService
{
  async onModuleInit() {
    await this.$connect();
  }

  async create(object: any): Promise<any> {
    return object;
  }

  async list() {
    return [];
  }

  async getById(id: string): Promise<any> {
    return { id };
  }

  async delete(id: string): Promise<void> {
    console.log("deleted", id);
  }

  async update(object: any, where: { id: string }): Promise<any> {
    return { ...object, id: where.id };
  }
}
