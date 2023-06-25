import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorMiddleWare.js";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
import { Server } from "socket.io";
import https from "https";
import fs from "fs";
import path from "path";

dotenv.config();
connectDB();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/users", eventRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("server is ready");
  });
}

app.use(errorHandler);
app.use(notFound);

const privateKeyPath = path.resolve("/etc/letsencrypt/live/eventwhisper.click/privkey.pem");
const certificatePath = path.resolve("/etc/letsencrypt/live/eventwhisper.click/fullchain.pem");

const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const certificate = fs.readFileSync(certificatePath, "utf8");

const credentials = { key: privateKey, cert: certificate };

const server = https.createServer(credentials, app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  let roomId = socket.id; // Use socket ID as the room ID
  // Join the room
  socket.join(roomId);

  socket.on("disconnect", () => {
    // Handle disconnect logic
  });

  // Emit an event to the client
  socket.emit("roomId", roomId);
});

server.listen(port, () =>
  console.log(`server is running at port ${port}`)
);
