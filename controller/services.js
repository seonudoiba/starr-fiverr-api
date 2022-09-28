const express = require('express');
let Services = require("../models/servicesModel.js") ;

const  getServices = async (req, res) => {
    try {
        const services = await Services.find({});
       

        res.status(200).json({ success: true, data: services });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
}
const createServices = async (req, res) => {
    try {
        const services = await Services.create(req.body);
        res.status(201).json({ success: true, data: services, r: req.files });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
}

module.exports = {getServices, createServices};