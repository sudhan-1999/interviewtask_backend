import { Router } from "express";
import {
  createLink,
  getLinks,
  getLinkStats,
  deleteLink
} from "../controllers/linkController.js";

const router = Router();

// Create short link
router.post("/links", createLink);

// List all links
router.get("/links", getLinks);

// Get stats for one code
router.get("/links/:code", getLinkStats);

// Delete a link
router.delete("/links/:code", deleteLink);

export default router;
