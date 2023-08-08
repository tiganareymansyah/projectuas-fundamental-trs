import jwt from "jsonwebtoken";
import connect from "../connectdb.js";

export async function login(req, res) {
  const cek = await connect.query(
    `SELECT * FROM user_data WHERE email = '${req.body.email}'`
  );
  if (cek.length > 0) {
    if (req.body.pwd === cek[0].pwd) {
      const token = jwt.sign(cek[0], "secret");
      res.send(token);
    } else {
      res.status(401).send("Kata sandi salah.");
    }
  } else {
    res.status(401).send("Nama pengguna tidak ditemukan.");
  }
}

export async function me(req, res) {
  const rows = await connect.query(`SELECT * FROM user_data WHERE user_id = '${req.user.user_id}'`)
  res.send(rows[0]);
}
