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

        this.router.post(`${this.path}/ping`, this.controller.ping);

        // handle 404 not found so express doesn't return an HTML response
        this.router.get('*', this.controller.notFound);
        this.router.head('*', this.controller.notFound);
        this.router.post('*', this.controller.notFound);
        this.router.put('*', this.controller.notFound);
        this.router.delete('*', this.controller.notFound);
        this.router.connect('*', this.controller.notFound);
        this.router.options('*', this.controller.notFound);
        this.router.trace('*', this.controller.notFound);
    }
}
