import { Module } from "@nestjs/common";
import { RepositoryModule } from "src/core/modules/repository.modules";
import { CarbonController } from "./carbon.controller";
import { CarbonService } from "./carbon.service";

@Module({
    controllers: [CarbonController],
    providers: [CarbonService],
    imports: [RepositoryModule]
})
export class CarbonModule {}