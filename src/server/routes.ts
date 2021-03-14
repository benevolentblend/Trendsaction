import * as express from "express";
import pdfReader from "./pdfReader";
import  { promises } from "fs";

const router = express.Router();

router.get("/api/fake-data", async (req, res) => {
  const result = await promises.readFile("/home/ben/Documents/11-2020.json", "utf-8");
  const data = JSON.parse(result);
  res.json(data);
});

router.get("/api/import", async (req, res) => {
  const data = await pdfReader("/home/ben/Downloads/10306_201130092911_4739580054117.PDF");

  res.send(data);
});

export default router;