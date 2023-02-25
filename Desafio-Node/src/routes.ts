import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

export { router };