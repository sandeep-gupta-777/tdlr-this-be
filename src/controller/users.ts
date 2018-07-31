import { NextFunction, Request, Response } from "express";
import { crud } from "../db/crud";
import { IController } from "./interface";
import { IUser, userModel } from "../models/user";
import noteModel from "../models/note";
import { app_Error_Code_Enum } from "../constants/error-list";

export let createUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};
export let readUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    try {
        let response:IUser[] = await crud.readRecord$(userModel, {_id: req.params._id});
        res.locals.body = response[0];
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
        next();
    }catch (e) {
        throw e;
    }
};

export let updateUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};

export let deleteUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};

