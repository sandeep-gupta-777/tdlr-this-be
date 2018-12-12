import { NextFunction, Request, Response } from "express";
import { crud } from "../db/crud";
import { IController } from "./interface";
import { app_Error_Code_Enum } from "../constants/error-list";
import noteModel from "../models/note";

export let createComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
    try {
        let query= {_id:req.query.post_id};
        let changes = {$push: { note_comments: req.body, note_commented_user_ids:req.body.comment_author_id}};
        let response = await crud.updateRecord$(noteModel, query, changes);
        res.locals.body = response;
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
        next();
    }catch (e) {
        throw e;
    }
};
export let readComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
        return await crud.readRecord$(noteModel, req.body);
};

export let readComments: IController =  async function(req: Request, res: Response, next: NextFunction) {
    try {
        let query= {comment_post_id:req.query.post_id};
        let response = await crud.readRecord$(noteModel, query);
        res.locals.body = response;
        res.locals.err_code = app_Error_Code_Enum.SUCCESS;
        next();
    }catch (e) {
        throw e;
    }
};
export let updateComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(noteModel, req.body);
};

export let deleteComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(noteModel, req.body);
};

