import { Injectable } from "@nestjs/common";
import { ObjectStorageService } from "../../../../core/abstract/object-storage";

@Injectable()
export class OracleObjectStorageService implements ObjectStorageService {
  message() {
    return "OracleObjectStorageService";
  }
}
