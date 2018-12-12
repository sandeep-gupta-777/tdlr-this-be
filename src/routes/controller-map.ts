import { login, notFound, signup, test1 } from "../controller";
import { createComment, deleteComment, readComment, readComments, updateComment } from "../controller/comments";
import { createNote, deleteNote, readNote, readNotes, updateNote } from "../controller/notes";
import { IController } from "../controller/interface";
import { createUser, readUser, updateUser } from "../controller/users";
import { app_Error_Code_Enum } from "../constants/error-list";
import { NOTFOUND } from "dns";
import { toggleLike } from "../controller/multiple-models";

export const apiControllers: { api: string, verb: string, controller: IController }[] = [
    {api: '/health', verb: 'get', controller: test1},
    {api: '/login', verb: 'post', controller: login},
    {api: '/signup', verb: 'put', controller: signup},

    {api: '/create/note', verb: 'post', controller: createNote},
    {api: '/read/note/:_id', verb: 'get', controller: readNote},
    {api: '/read/notes', verb: 'get', controller: readNotes},
    {api: '/update/note', verb: 'post', controller: updateNote},
    {api: '/delete/note/:_id', verb: 'post', controller: deleteNote},

    {api: '/create/comment', verb: 'put', controller: createComment},
    {api: '/read/comment/:_id', verb: 'get', controller: readComment},
    {api: '/read/comments', verb: 'get', controller: readComments},
    {api: '/update/comment/:_id', verb: 'post', controller: updateComment},
    {api: '/delete/comment/:_id', verb: 'post', controller: deleteComment},

    {api: '/read/user/:_id', verb: 'get', controller: readUser},
    {api: '/update/user/:_id', verb: 'post', controller: updateComment},

    {api: '/read/update/:_id', verb: 'get', controller: createUser},
    {api: '/update/update/:_id', verb: 'post', controller: readUser},
    {api: '/delete/update/:_id', verb: 'post', controller: updateUser},

    /*multiple model*/
    {api: '/togglelike', verb: 'post', controller: toggleLike},

    // {api: '*', verb: 'post', controller: notFound},
    // {api: '*', verb: 'get', controller: notFound},
    // {api: '*', verb: 'put', controller: notFound},
    // {api: '*', verb: 'delete', controller: notFound},
];