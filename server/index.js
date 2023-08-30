import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import sopRoutes from "./routes/sop.js";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}));
app.use(express.static(path.join(__dirname, 'public/assets')));

app.use("/sop", sopRoutes);

app.listen(process.env.PORT, () => console.log(`Server running at port: ${process.env.PORT}`));