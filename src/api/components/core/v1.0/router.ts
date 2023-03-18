import { Router } from 'express';
import { CustomRouterI } from '@shared/interfaces';

import { CoreController } from './controller'
import { Users, Auth } from './components'

export class CoreRouter implements CustomRouterI {
    public path = '/api/v1.0';
    public router = Router();
    protected controller: CoreController;

    protected usersRouter: Users.Router;
    protected authRouter: Auth.Router;

    constructor() {
        this.controller = new CoreController()
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use(`${this.path}/auth`, this.authRouter.router);
        this.router.use(`${this.path}/users`, this.usersRouter.router);

        this.router.post(`/ping`, this.controller.ping);
    }
}
