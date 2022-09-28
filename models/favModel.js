const mongoose = require("mongoose");

let favSchema = new mongoose.Schema(
	{
		Title: {
			type: Number,
			required: true,
			default: 0,
		},
        favId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Services",
		},
    }
	//   { collection: "favs" }
);
module.exports = mongoose.models.favs || mongoose.model("favs", favSchema);
