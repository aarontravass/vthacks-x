import { config } from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { carbon_emission } from "src/entity/carbon_emission";


config();

export const DatabaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize(process.env.DATABASE_URL);
            sequelize.addModels([
                carbon_emission
            ]);
            await sequelize
                .sync()
                .catch(error => {
                   console.error(error)
                });
            return sequelize;
        }
    }
];
