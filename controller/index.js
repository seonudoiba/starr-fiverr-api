import dbConnect from "../../../lib/dbConnect";
import Services from "../../../models/servicesModel";
const multer = require('multer')
const MulterAzureStorage = require('multer-azure-blob-storage').MulterAzureStorage;

dbConnect();
//////////////////////////////////////////////start multer azure//////////////////////////////////////////////////////////
const resolveBlobName = (req, file) => {
  return new Promise((resolve, reject) => {
      const blobName = yourCustomLogic(req, file);
      resolve(blobName);
  });
};

const resolveMetadata = (req, file) => {
  return new Promise((resolve, reject) => {
      const metadata = yourCustomLogic(req, file);
      resolve(metadata);
  });
};

const resolveContentSettings = (req, file) => {
  return new Promise(function(resolve, reject) {
      const contentSettings = yourCustomLogic(req, file);
      resolve(contentSettings);
    });
};

const azureStorage = new MulterAzureStorage({
  connectionString: 'DefaultEndpointsProtocol=https;AccountName=starrimages;AccountKey=Zqt6zQLj0bTpjlYvlPHbZvn6bWp8bh3XzSBC0rjXcR+XG5oPlo5fVrxSFphENHy8XNcywjpdXL3e+ASt4YkV3A==;EndpointSuffix=core.windows.net',
  accessKey: 'Zqt6zQLj0bTpjlYvlPHbZvn6bWp8bh3XzSBC0rjXcR+XG5oPlo5fVrxSFphENHy8XNcywjpdXL3e+ASt4YkV3A==',
  accountName: 'starrimages',
  containerName: '$logs',
  blobName: resolveBlobName,
  metadata: resolveMetadata,
  contentSettings: resolveContentSettings,
  containerAccessLevel: 'blob',
  urlExpirationTime: 60
});

const upload = multer({
  storage: azureStorage
});

///////////////////////////////////////////////Before request/////////////////////////////////////////////////////////////////

app.post('/documents', upload.any(), (req, res, next) => {
  
export default async('/documents', upload.any(), (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const services = await Services.find({}).populate("category").populate("subcategory");
       

        res.status(200).json({ success: true, data: services });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
      break;
    case "POST":
      try {
        const services = await Services.create(req.body);
        console.log(req.files)

        res.status(201).json({ success: true, data: services, r: req.files });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, err: error.message });
      break;
  }
});
