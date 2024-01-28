import { Global, Module } from "@nestjs/common";
import { ObjectStorageServiceProvider } from "./providers/object-storage.provider";
import { AuthServiceProvider } from "./providers/auth.provider";

@Global()
@Module({
  providers: [ObjectStorageServiceProvider, AuthServiceProvider],
  exports: [ObjectStorageServiceProvider, AuthServiceProvider],
})
export class CloudModule {}
