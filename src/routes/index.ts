import express, {NextFunction, Request, Response} from "express";
import {apiControllers } from "./controller-map";
const router = express.Router();
var expressListRoutes   = require('express-list-routes');

export let routerInit = function () {
    apiControllers.forEach((apiController)=>{
        (<any>router)[apiController.verb](apiController.api, apiController.controller);
    });

    expressListRoutes({ prefix: '' }, 'API:', router );
    return router;
};
