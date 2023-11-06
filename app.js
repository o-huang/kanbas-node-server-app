import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import "dotenv/config";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.NODE_ENV === "production"
      ? process.env.FRONTEND_URL
      : process.env.FRONTEND_URL_LOCAL,
  })
);

app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
