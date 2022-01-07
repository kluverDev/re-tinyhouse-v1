import { MongoClient } from "mongodb";

const user = "user1";

const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/main?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("main");
  return {
    listings: db.collection("listings"),
  };
};
