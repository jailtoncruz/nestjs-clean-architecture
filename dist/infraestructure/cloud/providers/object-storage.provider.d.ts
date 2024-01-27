import { ObjectStorageService } from '../../../core/abstract/object-storage';
import { MockObjectStorageService } from '../mock/object-storage/object-storage.service';
export declare const ObjectStorageServiceProvider: {
    provide: typeof ObjectStorageService;
    useClass: typeof MockObjectStorageService;
};
