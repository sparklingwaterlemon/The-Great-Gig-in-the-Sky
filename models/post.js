const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


















module.exports = mongoose.model("Post", postSchema);



// ICEBOX - comment schema

// Post Schema {
// comments: [commentSchema] }

// const commentSchema = newSchema({
//     comment: String,
//     user: { 
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     }
// })