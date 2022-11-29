import express from "express";
import config from "./config";

import leyNormasTiposRoutes from "./routes/leyNormasTipos.routes";

const app = express();

let port;
// settings
app.set("port", config.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(leyNormasTiposRoutes);

export default app;
