import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

export class TmdbDataSource extends RESTDataSource {
  private apiToken: string;

  constructor(apiToken: string) {
    super();
    this.apiToken = apiToken;
    this.baseURL = "https://api.themoviedb.org/";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.apiToken}`);
  }

  static movieReducer(source: any) {
    return {
      id: source.id,
      title: source.title,
      releaseDate: source.release_date,
      overview: source.overview,
    };
  }

  async getMovieById(id: number) {
    const result = await this.get(`3/movie/${id}`);
    return TmdbDataSource.movieReducer(result);
  }
}

export default () => ({
  tmdb: new TmdbDataSource(process.env.TMDB_API_TOKEN!),
});
