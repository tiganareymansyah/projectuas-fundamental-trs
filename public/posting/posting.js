document.querySelector("#home").onclick = () => {
  location.href = "../beranda/beranda.html";
};

document.querySelector("#chat").onclick = () => {
  location.href = "../chat/chat.html";
};

document.querySelector("#notification").onclick = () => {
  location.href = "../notification/notification.html";
};

document.querySelector("#profil").onclick = () => {
  document.querySelector(".profil").classList.toggle("open");
};

document.querySelector(".set-pengaturan").onclick = () => {
  location.href = "../pengaturan/pengaturan.html";
};

document.querySelector(".set-profil").onclick = () => {
  location.href = "../profil/profil.html";
};

// // Ganti Akun

document.querySelector(".ganti-akun").onclick = () => {
  localStorage.removeItem("token");
  location.href = "../login/login.html";
};

// Postingan

document.formposting.onsubmit = async (event) => {
  event.preventDefault();
  const post = new FormData();
  post.append("caption", document.formposting.caption.value);
  post.append("foto", document.formposting.foto.files[0]);
  await fetch("/api/restapitrs/post", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: post,
  });
  alert("Berhasil Di Posting");
  location.reload();
};
