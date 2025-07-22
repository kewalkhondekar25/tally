import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to tally api"
    })
})

export default app;