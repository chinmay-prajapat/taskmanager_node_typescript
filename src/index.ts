import express, { Request, Response } from "express";
const app = express();
const port = 5000;

app.get("/api/v1/tasks", (req: Request, res: Response): void => {
  res.status(200).send("<h1>Hello</h1>");
});

app.listen(port, () => console.log("server running on ", port));
