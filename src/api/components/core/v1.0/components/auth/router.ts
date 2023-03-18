import { Router } from 'express';
import { CustomRouterI } from '@shared/interfaces';
import { AuthController } from './controller'

export class AuthRouter implements CustomRouterI {
    public path = '/users';
    public router = Router({ mergeParams: true });
    protected controller: AuthController;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`/ping`, this.controller.ping);
    }
}
