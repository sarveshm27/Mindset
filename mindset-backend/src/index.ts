import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./routes/auth";
import quoteRoutes from "./routes/quotes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);
app.use("/quotes", quoteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


