import { Inject, Injectable } from "@nestjs/common";
import { carbon_emission } from "src/entity/carbon_emission";
import { ResponseModel } from "src/util.model";
import { CarbonPutBody } from "./carbon.model";
import { CARBON_EMISSION } from "./carbon.repository";

@Injectable()
export class CarbonService {
    constructor(
        @Inject(CARBON_EMISSION) private readonly carbonRepository: typeof carbon_emission
    ) { }


    async put(body: CarbonPutBody): Promise<ResponseModel> {
        await this.carbonRepository.create({
            ...body
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

    async fetchAll(): Promise<ResponseModel>{
        const data = await this.carbonRepository.findAll();
        const response = new ResponseModel();
        response.statusCode = 200;
        response.success = true;
        response.data = data;
        return response;
    }
}