import supertest from "supertest";

import app from "../src/app";

const request = supertest(app);

describe("app", () => {
  test("sends back list of emojis", (done: any) => {
    request
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄" }, done);
  });
});
