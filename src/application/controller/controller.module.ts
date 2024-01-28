import { Module } from "@nestjs/common";
import { AuthController } from "./auth/auth.controller";
import { EquipmentController } from "./equipment/equipment.controller";
import { EquipmentService } from "./equipment/equipment.service";

@Module({
  controllers: [AuthController, EquipmentController],
  providers: [EquipmentService],
})
export class ControllerModule {}
