import { IController } from "./interface";
import { crud } from "../db/crud";
import { NextFunction, Request, Response } from "express";
import { IUser, userModel } from "../models/user";
import { app_Error_Code_Enum } from "../constants/error-list";
import noteModel from "../models/note";

export let login: IController =  async function(req: Request, res: Response, next: NextFunction) {
    let query = {user_email:req.body.user_email};
    let response:IUser[] =  await crud.readRecord$(userModel, query);

    if(!response || response.length === 0){
        res.locals.err_code = app_Error_Code_Enum.CLIENT_INVALID_USER;
    }
    else if(response[0].user_password=== req.body.user_password){
        res.locals.body = response[0];
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
    }else{
        res.locals.err_code = app_Error_Code_Enum.CLIENT_INVALID_PASSWORD;
    }
    next();
};
export let signup: IController =  async function(req: Request, res: Response, next: NextFunction) {
    let response =  await crud.createRecord$(userModel, req.body );
    res.locals.body = response;
    res.locals.err_code = app_Error_Code_Enum.SUCCESS;
    next();
};

export let notFound: IController =  async function(req: Request, res: Response, next: NextFunction) {
    res.locals.err_code = app_Error_Code_Enum.ROUTE_NOT_FOUND;
    next();
};

