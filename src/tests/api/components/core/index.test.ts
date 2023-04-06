import { v1_0 } from "../../../../api/components/core";
import App from "../../../../app";
import request from "supertest";

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});

describe("Core Test", () => {
  describe("[POST] /ping", () => {
    it("should response with pong", function () {
      const router = new v1_0.Router();
      const app = new App([router]);

      return request(app.getServer())
        .post("/api/v1.0/ping")
        .expect(200, { message: "pong" });
    });
  });
});

describe("Core Auth Component Test", () => {
  describe("[POST] /auth/ping", () => {
    it("should response with pong", function () {
      const router = new v1_0.Router();
      const app = new App([router]);

      return request(app.getServer())
        .post("/api/v1.0/auth/ping")
        .expect(200, { message: "pong" });
    });
  });
});

describe("Core Users Component Test", () => {
  describe("[POST] /users/ping", () => {
    it("should response with pong", function () {
      const router = new v1_0.Router();
      const app = new App([router]);

      return request(app.getServer())
        .post("/api/v1.0/users/ping")
        .expect(200, { message: "pong" });
    });
  });
});
