import express from "express";
import os from "os";

const router = express.Router();

router.get("/healthz", (req, res) => {
  const uptime = process.uptime();

  res.json({
    ok: true,
    version: "1.0",
    uptime: `${Math.floor(uptime)} seconds`,
    timestamp: new Date().toISOString(),
    memory: process.memoryUsage(),
    platform: process.platform,
    cpu_count: os.cpus().length,
    loadavg: os.loadavg(),
    node_version: process.version,
  });
});

export default router;
