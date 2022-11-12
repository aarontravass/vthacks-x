import { Controller, Get, Put, Res } from "@nestjs/common";
import { CarbonService } from "./carbon.service";
import {Response} from 'express'
import { ResponseModel } from "src/util.model";

@Controller('carbon')
export class CarbonController{
    constructor(private readonly carbonService: CarbonService){}

    @Put('put')
    async putData(@Res() res:Response):Promise<Response<ResponseModel>>{
        const result = await this.carbonService.put();
        return res.status(result.statusCode).json(result);
    }
}