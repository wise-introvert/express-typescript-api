import { request } from "../test.utils";

describe("app", () => {
  test("sends back list of emojis", (done: any) => {
    request
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄" }, done);
  });
});
