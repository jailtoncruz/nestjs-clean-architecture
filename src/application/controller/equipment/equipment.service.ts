import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../../core/abstract/database/database-service";

@Injectable()
export class EquipmentService {
  constructor(private database: DatabaseService) {}

  list() {
    return this.database.list();
  }

  getById(id: string) {
    return this.database.getById(id);
  }
}
