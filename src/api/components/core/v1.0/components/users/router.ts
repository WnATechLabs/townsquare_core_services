import { Router } from 'express';
import { CustomRouterI } from '@shared/interfaces';
import { UsersController } from './controller'

export class UsersRouter implements CustomRouterI {
    public path = '/users';
    public router = Router({ mergeParams: true });
    protected controller: UsersController;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/ping', this.controller.ping);
    }
}
