import { ObjectStorageService } from '../../../core/abstract/object-storage';
export declare class AppService {
    private cloudService;
    constructor(cloudService: ObjectStorageService);
    getHello(): {
        message: string;
    };
}
