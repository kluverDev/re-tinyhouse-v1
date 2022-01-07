import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const user = "user1";
const password = "dYLvACcOtJwA1bG8";
const cluster = "cluster0.6dtif";
const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/main?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("main");
  return {
    listings: db.collection("listings"),
  };
};
