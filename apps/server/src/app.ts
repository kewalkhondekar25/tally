import express, { Response } from "express";
import cors from "cors"

const app = express();

//middlewares
app.use(express.json({
    limit: "20kb"
}));
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}));

//routes
import healthRouter from "./router/health.router";

app.use("/api/v1/health", healthRouter);

app.get("/", (_, res: Response) => {
    res.status(200).json({
        success: true,
        message: "welcome to tally api"
    });
});

export default app;