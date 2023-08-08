import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import { login, me } from "./routes/auth-routes.js";
import {
  getAllUser,
  addUser,
  editUser,
  deleteUser,
  userPost,
  berandaPost,
  changePp,
  tampilPp,
  chatFriend,
  tampilUserByEmail,
} from "./routes/instagram-routes.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());

function authoriz(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret", async (err, decoded) => {
      if (!err) {
        req.user = decoded;
        next();
      } else {
        res.status(401).send("Token salah.");
      }
    });
  } else {
    res.status(401).send("Token belum ada.");
  }
}

const upload = multer({ dest: "public/foto" });

app.post("/api/login", login);
app.post("/api/restapitrs", addUser);

app.use(authoriz);

app.get("/api/me", me);
app.get("/api/restapitrs", getAllUser);
app.put("/api/restapitrs", editUser);
app.delete("/api/restapitrs", deleteUser);
app.post("/api/restapitrs/post", upload.single("foto"), userPost);
app.get("/api/restapitrs/berpost", berandaPost);
app.put("/api/restapitrs/changepp", upload.single("foto"), changePp);
app.get("/api/restapitrs/tampilpp", tampilPp);

app.get("/api/restapitrs/chatfriend", chatFriend);
app.get("/api/restapitrs/:email", tampilUserByEmail);

app.listen(3000, () => console.log("Server sedang berjalan ....."));
