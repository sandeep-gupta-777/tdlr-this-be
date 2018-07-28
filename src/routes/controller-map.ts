import { login, signup } from "../controller";
import { createComment, deleteComment, readComment, updateComment } from "../controller/comments";
import { createNote, deleteNote, readNote, updateNote } from "../controller/notes";
import { IController } from "../controller/interface";
import { createUser, readUser, updateUser } from "../controller/users";
import { app_Error_Code_Enum } from "../constants/error-list";

export const apiControllers : {api:string, verb:string, controller:IController}[] = [
    {api:'/login', verb:'post', controller:login},
    {api:'/signup', verb:'post', controller:signup},

    {api:'/create/note', verb:'post', controller:createNote},
    {api:'/read/note/:_id', verb:'get', controller:readNote},
    {api:'/update/note/:_id', verb:'post', controller:updateNote},
    {api:'/delete/note/:_id', verb:'post', controller:deleteNote},

    {api:'/create/comment', verb:'post', controller:createComment},
    {api:'/read/comment/:_id', verb:'get', controller:readComment},
    {api:'/update/comment/:_id', verb:'post', controller:updateComment},
    {api:'/delete/comment/:_id', verb:'post', controller:deleteComment},

    {api:'/read/update/:_id', verb:'get', controller:createUser},
    {api:'/update/update/:_id', verb:'post', controller:readUser},
    {api:'/delete/update/:_id', verb:'post', controller:updateUser},
];