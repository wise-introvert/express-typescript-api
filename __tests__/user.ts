import { request } from "../test.utils";

describe("user", () => {
  test("sends back json response with user's name", (done: any) => {
    request
      .get("/api/v1/user")
      .query({ name: "John Doe" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { user: "John Doe" }, done);
  });
});
