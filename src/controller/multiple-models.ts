import { IController } from "./interface";
import { crud } from "../db/crud";
import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/user";
import noteModel from "../models/note";

export let toggleLike: IController = async function (req: Request, res: Response, next: NextFunction) {
    let user_id = req.query.note_author_id;
    let note_id = req.query.note_id;
    let userModelRes = await crud.readRecord$(userModel, {_id:user_id});
    let noteModelRes = await crud.readRecord$(noteModel, {_id:note_id});
    /*check if both responses are related*/
    let isNoteIdPresentInUser:boolean=false;
    let isUserIdPresentInNote:boolean =false;

    try {
        isNoteIdPresentInUser =
            userModelRes[0].user_likes_ids.find((value:any)=>value=== note_id);
        isUserIdPresentInNote =
            noteModelRes[0].note_liked_user_ids.find((value:any)=>{
               return value=== user_id
            });
    }catch (e) {}
    let hasUserLikedNote = isNoteIdPresentInUser && isUserIdPresentInNote;
    if(hasUserLikedNote){
        /*remove ids*/
        console.log();
        let userModelRemoveIdRes = await crud.updateRecord$(userModel, {_id:user_id}, {$pull:{user_likes_ids:note_id}});
        let noteModelRemoveIdRes = await crud.updateRecord$(noteModel, {_id:note_id}, {$pull:{note_liked_user_ids:user_id}});
    }else {
        /*add ids*/
        let userModelAddIdRes = await crud.updateRecord$(userModel, {_id:user_id}, {$push:{user_likes_ids:note_id}});
        let noteModelAddIdRes = await crud.updateRecord$(noteModel, {_id:note_id}, {$push:{note_liked_user_ids:user_id}});
        console.log();
    }
};