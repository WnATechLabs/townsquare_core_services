import { Router } from 'express';
import { CustomRouterI } from '@shared/interfaces';
import { UsersController } from './controller'

export class UsersRouter implements CustomRouterI {
    public router = Router({ mergeParams: true });
    protected controller: UsersController;

    constructor(controller: UsersController) {
        this.controller = controller;
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`/ping`, this.controller.ping);
    }
}
