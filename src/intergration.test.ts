import { createTestClient } from "apollo-server-testing";
import { ApolloServer, gql } from "apollo-server-express";
import { mocked } from "ts-jest/utils";
import schema from "./schema";
import { TmdbDataSource } from "./dataSources";

jest.mock("./dataSources");

const createTestServer = () => {
  const tmdb = mocked(new TmdbDataSource(""), true);
  const server = new ApolloServer({
    schema,
    dataSources: () => ({ tmdb }),
  });
  return { dataSources: { tmdb }, server };
};

const movieDetailQuery = gql`
  query MovieDetail($id: ID!) {
    movie(id: $id) {
      id
      title
      releaseDate
      overview
    }
  }
`;

test("query movie detail", async () => {
  const { dataSources, server } = createTestServer();
  dataSources.tmdb.getMovieById.mockResolvedValue(mockMovie);
  const { query } = createTestClient(server);
  const result = await query({
    query: movieDetailQuery,
    variables: {
      id: 603,
    },
  });
  expect(result).toMatchSnapshot();
});

const mockMovie = {
  id: 603,
  overview:
    "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  releaseDate: "1999-03-30",
  title: "The Matrix",
};
