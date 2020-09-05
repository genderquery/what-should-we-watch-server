import {
  ApolloServer,
  ApolloServerExpressConfig,
} from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import dataSources from "./dataSources";

export const config: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  dataSources,
};

export const server = new ApolloServer(config);

export default server;
