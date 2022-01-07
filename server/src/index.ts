// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { connectDatabase } from "./database";
//import { makeExecutableSchema } from "graphql-tools";
import { typeDefs, resolvers } from "./graphql";

//const schema = makeExecutableSchema({ typeDefs, resolvers });

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  server.applyMiddleware({ app, path: "/api" });
  app.listen(process.env.PORT);
  const listings = await db.listings.find({}).toArray();
  console.log(listings);
  console.log(`[app]: http://localhost:${process.env.PORT}`);
};

mount(express());
