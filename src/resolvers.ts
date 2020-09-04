export default {
  Query: {
    movie: (source: any, args: any, context: any) =>
      context.dataSources.tmdb.getMovieById(args.id),
  },
};
