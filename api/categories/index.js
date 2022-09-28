import dbConnect from "../../../lib/dbConnect";
import Categories from "../../../models/Categories";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const categories = await Categories.find({});

        res.status(200).json({ success: true, data: categories });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
      break;
    case "POST":
      try {
        const categories = await Categories.create(req.body);

        res.status(201).json({ success: true, data: categories });
      } catch (error) {
        res.status(400).json({ success: false, err: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, err: error.message });
      break;
  }
};
