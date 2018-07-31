
import mongoose from "mongoose";

export interface IUser extends mongoose.Document  {
    user_name? : string,
    user_email? : string,
    user_password? : string,
    user_password_hashed? : string,
    user_created? : Date,
    user_updated? : Date,
    user_notes_count? : number,
    user_followers_count? : number,
    user_following_count? : number,
    user_works_at? :string,
    user_reputation? :string,
    user_tags? :string[],
    user_comments_ids:string[],
    user_likes_ids:string[]
}

const userSchema = new mongoose.Schema({
    user_name: String,
    user_email: String,
    user_password_hashed: String,
    user_password: String,
    user_created: Date,
    user_updated: Date,
    user_notes_count: Number,
    user_followers_count: Number,
    user_following_count: Number,
    user_works_at:String,
    user_reputation:String,
    user_tags:[String],
    user_comments_ids:[String],
    user_likes_ids:[String]
});

export const userModel = mongoose.model("tdlr-user", userSchema);
