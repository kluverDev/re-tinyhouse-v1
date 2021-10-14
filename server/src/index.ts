import express from "express";

const app = express();

const port = 9000;
app.get("/", (req, res) => {
  res.send("hello world");
});

console.log(`[app] : http://localhost:${port}`);

app.listen(port);