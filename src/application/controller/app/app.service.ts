import { Injectable } from "@nestjs/common";
import { ObjectStorageService } from "../../../core/abstract/object-storage";

@Injectable()
export class AppService {
  constructor(private cloudService: ObjectStorageService) {}

  getHello() {
    console.log(process.env.NODE_ENV, process.env.NODE_ENV === "prod");
    return {
      message: this.cloudService.message(),
    };
  }
}
