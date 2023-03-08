//imports
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

//Interface
interface Payload {
    sub: string;
}

//middleware
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        //Validar o token
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    }

    catch (error) {
        return res.status(401).end();
    }
}