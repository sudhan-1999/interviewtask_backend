import { Router } from "express";
import Link from "../models/Link.js";

const router = Router();

router.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;

    const link = await Link.findOne({ code });

    if (!link) {
      return res.status(404).send("Not found");
    }

    // Update click stats
    link.clicks += 1;
    link.last_clicked = new Date();
    await link.save();

    // Redirect to original URL
    return res.redirect(302, link.url);

  } catch (error) {
    console.error("Redirect Error:", error);
    res.status(500).send("Server Error");
  }
});

export default router;
