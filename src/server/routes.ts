import * as express from "express";
import pdfReader from "./pdfReader";

const router = express.Router();

router.get("/api/hello", (req, res) => {
  res.json("World");
});

router.get("/api/import", async (req, res) => {
  const data = await pdfReader("/home/ben/Downloads/10306_201130092911_4739580054117.PDF");

  res.json(data);
});

export default router;