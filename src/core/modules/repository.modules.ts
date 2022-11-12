import { Module } from "@nestjs/common";
import { carbonRepository } from "src/carbon_emission/carbon.repository";

const repositories = [
    ...carbonRepository
]

@Module(
    {
        providers: repositories,
        exports: repositories
    }
)
export class RepositoryModule {}