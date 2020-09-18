import codes from "http-status-codes";
import supertest from "supertest";

import { request } from "../test.utils";

describe("Middlewares", () => {
  describe("error handler", () => {
    it("returns an error message when triggered", (done: any) => {
      request
        .get("/api/v1/user")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(codes.INTERNAL_SERVER_ERROR, (err: any, res: any) => {
          expect(res.body.error).toBeDefined();
          expect(res.body.error.length).not.toBe(0);
          done();
        });
    });
  });

  describe("not found", () => {
    it('returns "Not Found" error when triggered', (done: any) => {
      request
        .get("/some-unknown-route")
        .expect(codes.NOT_FOUND, (err: any, res: supertest.Response) => {
          expect(res.body.error).toMatch(/not found/i);
          done();
        });
    });
  });
});
