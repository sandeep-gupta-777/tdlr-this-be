import mongoose from "mongoose";

export interface IComment {
    comment_title: string,
    comment_body_text: string,
    comment_body_html: string,
    comment_post_id: number,
    comment_created: string,
    comment_updated: string,
    comment_tags: [string],
    comment_author_id: String,
    comment_author_name: string,
    comment_author_avatar_url: string,
    comment_likes_user_ids: string
}

export interface INote extends mongoose.Document {
    note_title: string,
    note_body_text: string,
    note_body_html: string,
    note_created: number,
    note_updated: number,
    note_tags: [string],
    note_author_id:string,
    note_author_name: string,
    note_author_avatar_url: string,
    note_comments: IComment[],
    note_commented_user_ids:string[],
    note_liked_user_ids:string[]
}

const noteSchema = new mongoose.Schema({
    note_title: String,
    note_body_text: String,
    note_body_html: String,
    note_created: Number,
    note_updated: Number,
    note_tags: [String],
    note_author_id:String,
    note_author_name: String,
    note_author_avatar_url: String,
    note_liked_user_ids:[String],
    note_commented_user_ids:[String],
    note_comments: [{
        comment_title: String,
        comment_body_text: String,
        comment_body_html: String,
        comment_post_id: String,
        comment_created: Date,
        comment_updated: Date,
        comment_tags: [String],
        comment_author_id: String,
        comment_author_name: String,
        comment_author_avatar_url: String,
        comment_likes_user_ids:Number
    }]
});

const noteModel = mongoose.model("note", noteSchema);
export default noteModel;
