import { Injectable } from "@nestjs/common";
import { ObjectStorageService } from "../../../../core/abstract/object-storage";

@Injectable()
export class MockObjectStorageService implements ObjectStorageService {
  message() {
    return "MockObjectStorageService";
  }
}
