import { Request, Response } from "express";

const routeNotFound = (req: Request, res: Response) => {
    return res.status(400).send("ROUTE NOT FOUND");
};

export { routeNotFound };