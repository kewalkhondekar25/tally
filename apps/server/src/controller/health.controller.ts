import { Request, Response } from "express"

const health = async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            message: "health check passed",
            timestamp: new Date()
        });
    } catch (error) {
        console.log(error);
    }
};

export { health };