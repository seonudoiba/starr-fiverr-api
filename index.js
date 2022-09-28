const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const serviceRoutes = require("./routes/services.js");
const favRoutes = require("./routes/favs.js");
let bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URI 
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/services", serviceRoutes);
app.use("/favs", favRoutes);

app.get("/", (req, res) => {
	res.send({
		hell: "World",
		hele: "World",
		helr: "World",
		helo: "World",
		hely: "World",
		heol: "World",
	});
});

mongoose
	.connect(
		url,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(
		app.listen(port, () => {
			console.log(`Starr App listening on port ${port}`);
		})
	)
	.catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);
