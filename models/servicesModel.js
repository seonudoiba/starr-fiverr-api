const mongoose = require("mongoose");

let serviceSchema = new mongoose.Schema(
	{
		Title: {
			type: String,
			required: true,
			default: "Your Title",
		},
		Tag: String,
		rating: [String],
		Description: {
			type: String,
			required: true,
			default: "Description",
		},
		Price: {
			type: Number,
			default: 0,
		},
		Category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Categories",
		},
		SubCategory: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "subCategories",
		},
		Image: {
			type: String,
			default: "images/8.jpg",
		},
		createdAt: {
			type: Date,
			default: new Date().getFullYear(),
		},
	}
	//   { collection: "services" }
);
module.exports = mongoose.models.Services || mongoose.model("Services", serviceSchema);
