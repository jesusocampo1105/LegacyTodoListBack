const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    flower:{
        type: String
    }
});

module.exports = mongoose.model("todo", TodoSchema);