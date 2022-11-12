import { Body, Controller, Get, Put, Res } from "@nestjs/common";
import { CarbonService } from "./carbon.service";
import { Response } from 'express'
import { ResponseModel } from "src/util.model";
import { CarbonPutBody } from "./carbon.model";

@Controller('carbon')
export class CarbonController {
    constructor(private readonly carbonService: CarbonService) { }

    @Put('put')
    async putData(@Body() body: CarbonPutBody ,@Res() res: Response): Promise<Response<ResponseModel>> {
        const result = await this.carbonService.put(body);
        return res.status(result.statusCode).json(result);
    }

    @Get('fetchall')
    async fetchall(@Res() res: Response):Promise<Response<ResponseModel>>{
        const result = await this.carbonService.fetchAll();
        return res.status(result.statusCode).json(result)
    }
}