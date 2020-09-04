import { gql } from "apollo-server-express";

export default gql`
  type Query {
    movie(id: ID!): Movie
  }

  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    overview: String!
  }
`;
