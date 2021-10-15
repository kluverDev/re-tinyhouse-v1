import express from "express";

import { listings } from "./listings";

const app = express();
app.use(express.json());

const port = 9000;
app.get("/listings", (_req, res) => {
  res.send(listings);
});
app.post("/delete-listing", (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
    return res.send("failed to find listings");
  }
});

// const three: string = "one";

// const three: null = null;

// const three: undefined = undefined;

// const three: any = {};

console.log(`[app] : http://localhost:${port}`);

app.listen(port);
