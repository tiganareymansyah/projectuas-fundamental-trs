document.querySelector("#home").onclick = () => {
  location.href = "../beranda/beranda.html";
};

document.querySelector("#chat").onclick = () => {
  location.href = "../chat/chat.html";
};

document.querySelector("#posting").onclick = () => {
  location.href = "../posting/posting.html";
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
