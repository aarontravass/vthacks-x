import { carbon_emission } from "src/entity/carbon_emission";

export const CARBON_EMISSION = 'CARBON_EMISSION'; 

export const carbonRepository = [
    {
        provide: CARBON_EMISSION,
        useValue: carbon_emission
    }
]