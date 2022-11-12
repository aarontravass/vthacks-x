import { Inject, Injectable } from "@nestjs/common";
import { carbon_emission } from "src/entity/carbon_emission";
import { ResponseModel } from "src/util.model";
import { CARBON_EMISSION } from "./carbon.repository";

@Injectable()
export class CarbonService {
    constructor(
        @Inject(CARBON_EMISSION) private readonly carbonRepository: typeof carbon_emission
    ) { }


    async put(): Promise<ResponseModel> {
        await this.carbonRepository.create({
            title: "hello"
        }).then(res => {
            console.log(res);
        }).catch(er => {
            console.error(er)
        })
        const response = new ResponseModel();
        response.statusCode = 200;
        response.success = true;
        return response;
    }
}