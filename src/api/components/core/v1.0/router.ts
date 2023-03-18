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
        this.usersRouter = new Users.Router(new Users.Controller())
        this.authRouter = new Auth.Router(new Auth.Controller())
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use(`${this.path}/auth`, this.authRouter.router);
        this.router.use(`${this.path}/users`, this.usersRouter.router);

        this.router.post(`/ping`, this.controller.ping);
    }
}
