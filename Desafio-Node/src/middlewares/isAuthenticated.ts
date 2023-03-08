//imports
import { Request, Response, NextFunction } from "express";

//middleware
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    console.log("Chamou o middleware isAuthenticated")
}