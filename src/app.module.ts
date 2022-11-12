import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarbonModule } from './carbon_emission/carbon.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        DatabaseModule,
        CarbonModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
