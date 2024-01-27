"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectStorageServiceProvider = void 0;
const object_storage_1 = require("../../../core/abstract/object-storage");
const contants_1 = require("../../config/environment/contants");
const object_storage_service_1 = require("../mock/object-storage/object-storage.service");
const object_storage_service_2 = require("../oracle/object-storage/object-storage.service");
exports.ObjectStorageServiceProvider = {
    provide: object_storage_1.ObjectStorageService,
    useClass: contants_1.PRODUCTION_MODE
        ? object_storage_service_2.OracleObjectStorageService
        : object_storage_service_1.MockObjectStorageService,
};
//# sourceMappingURL=object-storage.provider.js.map