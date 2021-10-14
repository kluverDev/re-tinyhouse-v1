import express from "express";

const app = express();
const num = 1;
const port = 9000;
app.get("/", (_req, res) => {
  res.send("hello world");
});
const three = false;

// const three: string = "one";

// const three: null = null;

// const three: undefined = undefined;

// const three: any = {};

console.log(`[app] : http://localhost:${port}`);

app.listen(port);
