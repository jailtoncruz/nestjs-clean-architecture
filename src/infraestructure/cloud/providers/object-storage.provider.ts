import { ObjectStorageService } from "../../../core/abstract/object-storage";
import { PRODUCTION_MODE } from "../../config/environment/contants";
import { MockObjectStorageService } from "../mock/object-storage/object-storage.service";
import { OracleObjectStorageService } from "../oracle/object-storage/object-storage.service";

export const ObjectStorageServiceProvider = {
  provide: ObjectStorageService,
  useClass: PRODUCTION_MODE
    ? OracleObjectStorageService
    : MockObjectStorageService,
};
