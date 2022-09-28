import dbConnect from "../../../lib/dbConnect";
import subCategories from "../../../models/subCategories";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const subcategories = await subCategories.find({});
       

        res.status(200).json({ success: true, data: subcategories });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
      break;
    case "POST":
      try {
        const subcategories = await subCategories.create(req.body)
     

        res.status(201).json({ success: true, data: subcategories });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, err: error.message });
      break;
  }
};
