import { NextFunction, Request, Response } from "express";
import { crud } from "../db/crud";
import noteModel from "../models/note";
import { IController } from "./interface";
import { app_Error_Code_Enum } from "../constants/error-list";


export let createNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    try {
        let response = await crud.createRecord$(noteModel, req.body);
        console.log(response);
        res.locals.body = response;
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
        next();
    } catch (e) {
        throw e;
    }

};
export let readNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    let response = await crud.readRecord$(noteModel, {_id: req.params._id});
    res.locals.body = response[0];
    res.locals.err_code = app_Error_Code_Enum.SUCCESS;
    next();
};

export let readNotes: IController = async function (req: Request, res: Response, next: NextFunction) {

    //{"note_author_id" : "5b5f960689051f4340de7358"}
    //{"note_author_id" : "5b5f960689051f4340de7358"}

    try {
        let response = await crud.readRecord$(noteModel, req.query);
        res.locals.body = response;
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
        next();
    } catch (e) {
        throw e;
    }
};

export let updateNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    try {
        let response = await crud.readRecord$(noteModel, req.query);
        res.locals.body = response;
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
        next();
    } catch (e) {
        throw e;
    }
};

export let deleteNote: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(noteModel, req.body);
};

