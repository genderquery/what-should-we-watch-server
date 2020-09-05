import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import schema from "./schema";
import dataSources, { DataSources } from "./dataSources";

export interface Context {
  dataSources: DataSources<Context>;
}

export const config: ApolloServerExpressConfig = {
  schema,
  dataSources,
};

export const server = new ApolloServer(config);

export default server;
