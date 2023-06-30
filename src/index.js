import express from "express";

const app = express();

app.get("/csh", (req, res) => {
    res.json({ status: 200, message: "Fine!!" });
});

app.listen("4000", console.log("listenig on 4000"));
