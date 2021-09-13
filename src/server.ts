import express from "express";

const PORT = "3000";

const app = express();

app.get("/teste", (req, res) => {
  return res.send("Ola, dev!!");
});

app.post("/teste-post", (req, res) => {
  return res.send("Ola API!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
