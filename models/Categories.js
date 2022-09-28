const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
    required: [true, "Please add a title"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    default: "",
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
});

module.exports =
  mongoose.models.Categories || mongoose.model("Categories", CategorySchema);
