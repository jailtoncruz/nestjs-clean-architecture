import { Injectable } from "@nestjs/common";
import { ObjectStorageService } from "../../../../core/abstract/cloud-services/object-storage";

@Injectable()
export class OracleObjectStorageService implements ObjectStorageService {
  message() {
    return "OracleObjectStorageService";
  }
}
