export class ErrorModel{
    message: string;
}


export class ResponseModel{
    statusCode: number;
    success: boolean;
    error: ErrorModel;
    data: any;
}