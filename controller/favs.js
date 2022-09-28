const express = require("express");
let fav = require("../models/favModel.js");

const getfav = async (req, res) => {
	try {
		fav = await fav.find({});

		res.status(200).json({ success: true, data: fav });
	} catch (error) {
		res.status(400).json({ success: false, err: error.message });
	}
};
const createfav = async (req, res) => {
	try {
		fav = await fav.create(req.body);
		res.status(201).json({ success: true, data: fav, r: req.files });
	} catch (error) {
		res.status(400).json({ success: false, err: error.message });
	}
};

module.exports = { getfav, createfav };
