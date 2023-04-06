import { Request, Response, NextFunction } from "express";
import { constants as status } from "http2";
import { HttpException } from "../../../../shared/exceptions/HttpException";

export class CoreController {
  public ping(req: Request, res: Response) {
    // todo: return object that complies with standard format
    return res.status(status.HTTP_STATUS_OK).json({ message: "pong" });
  }

  public notFound(req: Request, res: Response, next: NextFunction) {
    const { method, path } = req;
    return next(
      new HttpException(
        status.HTTP_STATUS_NOT_FOUND,
        `cannot ${method} ${path}`
      )
    );
  }
}
