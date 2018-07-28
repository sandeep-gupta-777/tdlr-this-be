import mongoose from "mongoose";

export interface INote extends mongoose.Document  {
    note_title: string,
    note_body_text: string,
    note_body_html: string,
    note_created: number,
    note_updated: number,
    note_tags: [string],
    note_author_name:string,
    note_author_avatar_url:string,
}

const noteSchema = new mongoose.Schema({
    note_title: String,
    note_body_text: String,
    note_body_html: String,
    note_created: Number,
    note_updated: Number,
    note_tags: [String],
    note_author_name:String,
    note_author_avatar_url:String,
});

const noteModel = mongoose.model("note", noteSchema);
export default noteModel;
