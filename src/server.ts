import "reflect-metadata";
import express from "express";

import "./database";

const PORT = "3000";

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
