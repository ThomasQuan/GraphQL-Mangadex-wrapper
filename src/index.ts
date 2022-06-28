import express, { Application } from "express";

// Boot express
const app: Application = express();
const port = 5000;

// Start server
app.listen(port, () => console.info(`Server is listening on port ${port}!`));
