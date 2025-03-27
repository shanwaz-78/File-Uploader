import "dotenv/config";
import app from "./app.js";
import { createServer } from "http";

const port = process.env.PORT ?? 8080;

const server = createServer(app);
server.listen(port);

server.on("listening", () =>
  console.log(`server is listening on port:${port}`)
);
server.on("error", () =>
  console.log(`server is not listening: on port:${port}`)
);
