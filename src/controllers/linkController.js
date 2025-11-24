import Link from "../models/Link.js";
import { isValidUrl } from "../utils/validateUrl.js";
import { generateCode } from "../utils/generateCode.js";

// ----------------------------
// Create Short Link
// ----------------------------
export async function createLink(req, res) {
  try {
    const { url, code: customCode } = req.body;
    if (!isValidUrl(url)) {
      return res.status(400).json({ error: "Invalid URL" });
    }

    // Use custom code or generate random
    let code = customCode || generateCode(6);

    // Check duplicate codes
    const exists = await Link.findOne({ code });
    if (exists) {
      return res.status(409).json({ error: "Code already exists" });
    }

    const newLink = await Link.create({ url, code });
    return res.status(201).json(newLink);

  } catch (error) {
    console.error("Create Link Error:", error);
    res.status(500).json({ error: "Server error" });
  }
}


// ----------------------------
// Get All Links
// ----------------------------
export async function getLinks(req, res) {
  try {
    const links = await Link.find().sort({ created_at: -1 });
    res.json(links);
  } catch (error) {
    console.error("Get Links Error:", error);
    res.status(500).json({ error: "Server error" });
  }
}


// ----------------------------
// Get Single Link Stats
// ----------------------------
export async function getLinkStats(req, res) {
  try {
    const { code } = req.params;

    const link = await Link.findOne({ code });
    if (!link) {
      return res.status(404).json({ error: "Code not found" });
    }

    res.json(link);
  } catch (error) {
    console.error("Get Link Stats Error:", error);
    res.status(500).json({ error: "Server error" });
  }
}


// ----------------------------
// Delete Link
// ----------------------------
export async function deleteLink(req, res) {
  try {
    const { code } = req.params;

    const deleted = await Link.findOneAndDelete({ code });
    if (!deleted) {
      return res.status(404).json({ error: "Code not found" });
    }

    res.json({ message: "Deleted" });

  } catch (error) {
    console.error("Delete Link Error:", error);
    res.status(500).json({ error: "Server error" });
  }
}
