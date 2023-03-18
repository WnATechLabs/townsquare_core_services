import { Request, Response } from 'express';
import { constants as status } from 'http2';

export class AuthController {
    public ping(req: Request, res: Response) {
        // todo: return object that complies with standard format
        return res.status(status.HTTP_STATUS_OK).json({ message: 'pong' });
    }
}