import { Router } from "express";
import { CustomRouterI } from "../../../../../../shared/interfaces";
import { AuthController } from "./controller";

export class AuthRouter implements CustomRouterI {
  public router = Router({ mergeParams: true });
  protected controller: AuthController;

  constructor(controller: AuthController) {
    this.controller = controller;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`/ping`, this.controller.ping);
  }
}
