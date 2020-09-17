import supertest from "supertest";

import app from "../src/app";

const request = supertest(app);

describe("user", () => {
  test("sends back json response with user's name", (done: any) => {
    request
      .get("/api/v1/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { user: "John Doe" }, done);
  });
});
