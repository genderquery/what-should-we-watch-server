import { DataSource } from "apollo-datasource";
import { TmdbDataSource } from "./TmdbDataSource";

export interface DataSources<Context>
  extends Record<string, DataSource<Context>> {
  tmdb: TmdbDataSource<Context>;
}

const dataSources = () => ({
  tmdb: new TmdbDataSource(process.env.TMDB_API_TOKEN!),
});

export { TmdbDataSource };
export default dataSources;
