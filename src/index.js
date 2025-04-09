console.log("Hello World");

import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello World2");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
