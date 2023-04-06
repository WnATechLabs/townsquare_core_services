import { Router } from "express";

export interface CustomRouterI {
  path?: string;
  router: Router;
}
