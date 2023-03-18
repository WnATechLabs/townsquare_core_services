import {v1_0} from '@core'
import App from "@project/app";
import request from "supertest";

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Core Test', () => {
    describe('[POST] /ping', () => {
        it('should response with pong', function () {
            const router = new v1_0.Router();
            const app = new App([router])

            return request(app.getServer()).post('/api/v1.0/ping').expect(200, {message: "pong"});
        });
    });
});