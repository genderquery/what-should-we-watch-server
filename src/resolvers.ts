import { Resolvers } from "./generated/resolvers-types";
import { Context } from "./apollo";

const resolvers: Resolvers<Context> = {
  Query: {
    movie: (source, args, context) =>
      context.dataSources.tmdb.getMovieById(args.id),
  },
};

export default resolvers;
