import { Router } from "express";

import { prisma } from "../prisma";
import { AuthedRequest, authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/", authMiddleware, async (req: AuthedRequest, res) => {
  const quotes = await prisma.quote.findMany({
    where: { userId: req.userId },
    orderBy: { createdAt: "desc" },
  });

  return res.json(quotes);
});

router.post("/", authMiddleware, async (req: AuthedRequest, res) => {
  const { text } = req.body as { text?: string };

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  const quote = await prisma.quote.create({
    data: {
      text,
      userId: req.userId!,
    },
  });

  return res.status(201).json(quote);
});

export default router;


