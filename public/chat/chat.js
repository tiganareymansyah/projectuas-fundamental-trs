document.querySelector("#home").onclick = () => {
  location.href = "../beranda/beranda.html";
};

document.querySelector("#posting").onclick = () => {
  location.href = "../posting/posting.html";
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

// Chat Friend

fetch("/api/restapitrs/chatfriend", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const chatFriend = document.querySelector(".chat-friend");
    for (let a = 0; a < data.length; a++) {
      const user = document.createElement("p");
      user.textContent = data[a].email;
      chatFriend.appendChild(user);
    }
  });
