//imports
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

//Interface
interface Payload {
    sub: string;
}

//middleware
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    console.log("Chamou o middleware isAuthenticated")
    return next();
}