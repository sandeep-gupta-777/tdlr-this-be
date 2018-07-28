import { NextFunction, Request, Response } from "express";
import { crud } from "../db/crud";
import commentModel from "../models/comment";
import { IController } from "./interface";

export let createComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(commentModel, req.body);
};
export let readComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
        return await crud.readRecord$(commentModel, req.body);
};
export let updateComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(commentModel, req.body);
};

export let deleteComment: IController =  async function(req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(commentModel, req.body);
};

