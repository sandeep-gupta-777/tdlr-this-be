import { Request, Response } from "express";
import { app_Error_Code_Enum, app_Error_Code_Map, IErrorDetail } from "../constants/error-list";

export function sendRes(req: Request, res: Response) {
    let error_code = res.locals.err_code;
    let errorDetail:IErrorDetail = app_Error_Code_Map.get(error_code);
    errorDetail.body = res.locals.body;
    res.send(errorDetail);
}
