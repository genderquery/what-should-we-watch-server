import { gql } from "apollo-server-express";
import { createTestClient } from "apollo-server-testing";
import server from "./apollo";

test("hello", async () => {
  const { query } = createTestClient(server);
  const result = await query({
    query: gql`
      query HelloQuery {
        hello
      }
    `,
  });
  expect(result).toMatchSnapshot();
});
