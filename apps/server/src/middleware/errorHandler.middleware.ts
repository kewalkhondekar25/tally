import { Request, Response } from "express";
import { ApiErrorClass } from "../utils/apiError";

const errorHandler = (err: any, req: Request, res: Response) => {
    if(err instanceof ApiErrorClass){
        return res.status(err.statusCode).json({
            success: false, message: err.message
        });
    }
    return res.status(500).json({ success: false, message: "Something went wrong"})
};

export { errorHandler };