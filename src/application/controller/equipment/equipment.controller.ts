import { Controller, Get, Param } from "@nestjs/common";
import { EquipmentService } from "./equipment.service";

@Controller("equipment")
export class EquipmentController {
  constructor(private service: EquipmentService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.service.getById(id);
  }
}
