const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String,
    }
})


module.exports = mongoose.model("image", imageSchema);