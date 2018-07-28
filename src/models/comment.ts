import mongoose from "mongoose";

export interface IComment extends mongoose.Document  {
    comment_title: string,
    comment_body_text: string,
    comment_body_html: string,
    comment_created: Date,
    comment_updated: Date,
    comment_tags: [string],
    comment_author_name:string,
    comment_author_avatar_url:string,
}

const commentSchema = new mongoose.Schema({
    comment_title: String,
    comment_body_text: String,
    comment_body_html: String,
    comment_created: Date,
    comment_updated: Date,
    comment_tags: [String],
    comment_author_name:String,
    comment_author_avatar_url:String,
});

const commentModel = mongoose.model("comment", commentSchema);
export default commentModel;
