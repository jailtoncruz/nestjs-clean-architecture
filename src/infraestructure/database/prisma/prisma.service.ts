import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { DatabaseService } from "../../../core/abstract/database/database-service";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, DatabaseService {
  async onModuleInit() {
    await this.$connect();
  }
}
