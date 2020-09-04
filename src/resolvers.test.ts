import resolvers from "./resolvers"

test('hello', () => {
  const result = resolvers.Query.hello()
  expect(result).toBe("Hello world!")
})
