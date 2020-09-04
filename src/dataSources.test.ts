import { RequestOptions } from "apollo-datasource-rest";
import { Headers, URLSearchParams } from "apollo-server-env";
import { TmdbDataSource } from "./dataSources";

const mockMovie = {
  adult: false,
  backdrop_path: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
  belongs_to_collection: {
    id: 2344,
    name: "The Matrix Collection",
    poster_path: "/lh4aGpd3U9rm9B8Oqr6CUgQLtZL.jpg",
    backdrop_path: "/bRm2DEgUiYciDw3myHuYFInD7la.jpg",
  },
  budget: 63000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "http://www.warnerbros.com/matrix",
  id: 603,
  imdb_id: "tt0133093",
  original_language: "en",
  original_title: "The Matrix",
  overview:
    "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  popularity: 51.055,
  poster_path: "/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
  production_companies: [
    {
      id: 79,
      logo_path: "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
      name: "Village Roadshow Pictures",
      origin_country: "US",
    },
    {
      id: 372,
      logo_path: null,
      name: "Groucho II Film Partnership",
      origin_country: "",
    },
    {
      id: 1885,
      logo_path: "/xlvoOZr4s1PygosrwZyolIFe5xs.png",
      name: "Silver Pictures",
      origin_country: "US",
    },
    {
      id: 174,
      logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      name: "Warner Bros. Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "AU",
      name: "Australia",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1999-03-30",
  revenue: 463517383,
  runtime: 136,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Welcome to the Real World.",
  title: "The Matrix",
  video: false,
  vote_average: 8.1,
  vote_count: 17671,
};

const get = jest.fn<any, any>();

jest.mock("apollo-datasource-rest", () => ({
  __esModule: true,
  RESTDataSource: class {
    get = get
  },
}));

test("movieReducer", () => {
  const result = TmdbDataSource.movieReducer(mockMovie);
  expect(result).toMatchSnapshot();
});


test("sends API token", async () => {
  const tmdb = new TmdbDataSource("mytoken");
  const request: RequestOptions = {
    path: "/",
    params: new URLSearchParams(),
    headers: new Headers(),
  };
  tmdb.willSendRequest(request);
  expect(request.headers.get("Authorization")).toBe("Bearer mytoken");
});

test("getMovieById", async () => {
  get.mockReset()
  get.mockReturnValueOnce(mockMovie)

  const tmdb = new TmdbDataSource("mytoken");
  const result = await tmdb.getMovieById(506);

  expect(get).toHaveBeenCalledWith('3/movie/506')
  expect(result).toMatchSnapshot()
});
