import connect from "../connectdb.js";

export async function getAllUser(req, res) {
  const print = await connect.query(
    `SELECT email FROM user_data WHERE user_id != '${req.user.user_id}'`
  );
  res.send(print);
}

export async function addUser(req, res) {
  await connect.query(
    `INSERT INTO user_data VALUES
        (NULL,'${req.body.namaDepan}', 
        '${req.body.namaBelakang}', 
        '${req.body.email}', 
        '${req.body.pwd}', 
        '${req.body.date}', 
        '${req.body.jenKel}',NULL)`
  );
  res.send("Data berhasil disimpan");
}

export async function editUser(req, res) {
  await connect.query(
    `UPDATE user_data SET email = '${req.body.updateNewEmail}', pwd = '${req.body.updateNewPassword}' WHERE user_id = '${req.user.user_id}'`
  );
  res.send("Data telah di edit");
}

export async function deleteUser(req, res) {
  await connect.query(
    `DELETE FROM user_data WHERE user_id = '${req.user.user_id}'`
  );
  res.send("Mahasiswa telah dihapus.");
}

export async function userPost(req, res) {
  await connect.query(
    `INSERT INTO user_post VALUES (NULL, '${req.body.caption}','${req.file.filename}','${req.user.user_id}')`
  );
  res.send("Postingan telah di tambahkan");
}

export async function berandaPost(req, res) {
  const posts = await connect.query(
    `SELECT post_caption,post_file,user_data.email FROM user_data, user_post WHERE user_data.user_id = user_post.user_id AND user_post.user_id = '${req.user.user_id}' ORDER BY post_id DESC`
  );
  res.send(posts);
}

export async function changePp(req, res) {
  await connect.query(
    `UPDATE user_data SET file_change_profil = '${req.file.filename}' WHERE user_id = '${req.user.user_id}'`
  );
  res.send("Foto berhasil di ganti");
}

export async function tampilPp(req, res) {
  const pp = await connect.query(
    `SELECT profil_file,user_data.email FROM user_data,user_profil WHERE user_data.user_id = user_profil.user_id AND user_profil.user_id = ${req.user.user_id}`
  );
  res.send(pp);
}

export async function chatFriend(req, res) {
  const cf = await connect.query(
    `SELECT email FROM user_data WHERE user_id != '${req.user.user_id}'`
  );
  res.send(cf);
}

// export async function tampilUser(req, res) {
//   const tamuse = await connect.query(
//     `SELECT *`
//   )
// }

export async function tampilUserByEmail(req, res) {
  const tube = await connect.query(
    `SELECT * FROM user_data WHERE email = '${req.params.email}'`
  );
  res.send (tube[0]);
}