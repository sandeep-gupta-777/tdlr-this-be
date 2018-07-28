import { NextFunction, Request, Response } from "express";
import { crud } from "../db/crud";
import { IController } from "./interface";
import { userModel } from "../models/user";

export let createUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};
export let readUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.readRecord$(userModel, req.body);
};

export let updateUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};

export let deleteUser: IController = async function (req: Request, res: Response, next: NextFunction) {
    return await crud.createRecord$(userModel, req.body);
};

