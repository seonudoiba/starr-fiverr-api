const mongoose = require("mongoose");

let favSchema = new mongoose.Schema(
	{
        fav: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Services",
		},
    }
	//   { collection: "favs" }
);
module.exports = mongoose.models.favs || mongoose.model("favs", favSchema);
