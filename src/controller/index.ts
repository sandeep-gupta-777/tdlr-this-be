import { IController } from "./interface";
import { crud } from "../db/crud";
import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/user";
import { app_Error_Code_Enum } from "../constants/error-list";
import noteModel from "../models/note";

export let login: IController =  async function(req: Request, res: Response, next: NextFunction) {
    let response =  await crud.createRecord$(userModel, req.body );
    res.locals.body = response;
    res.locals.err_code = app_Error_Code_Enum.SUCCESS;
    next();
};
export let signup: IController =  async function(req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};

