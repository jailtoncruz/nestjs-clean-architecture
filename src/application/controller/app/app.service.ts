import { Injectable } from "@nestjs/common";
import { ObjectStorageService } from "../../../core/abstract/cloud-services/object-storage";

@Injectable()
export class AppService {
  constructor(private cloudService: ObjectStorageService) {}

  getHello() {
    return {
      message: this.cloudService.message(),
    };
  }
}
