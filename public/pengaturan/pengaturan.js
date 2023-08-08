document.querySelector("#home").onclick = () => {
  location.href = "../beranda/beranda.html";
};

document.querySelector("#chat").onclick = () => {
  location.href = "../chat/chat.html";
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

document.querySelector(".set-profil").onclick = () => {
  location.href = "../profil/profil.html";
};

// // Update akun

document.formupdate.onsubmit = async (event) => {
  event.preventDefault();
  const updateNewEmail = document.formupdate.updatenewemail.value;
  const updateNewPassword = document.formupdate.updatenewpassword.value;
  if (
    confirm(
      `Apakah anda yakin ingin mengubah akun anda dengan email = ${updateNewEmail} & password = ${updateNewPassword} ?`
    )
  ) {
    await fetch("/api/restapitrs", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        updateNewEmail,
        updateNewPassword,
      }),
    });
    localStorage.removeItem("token");
    location.href = "../login/login.html";
  }
};

// // Delete Akun

fetch("/api/restapitrs", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
document.querySelector(".delete-akun").onclick = () => {
  if (confirm("Apakah Anda yakin ingin menghapus akun anda ?")) {
    fetch("/api/restapitrs", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    localStorage.removeItem("token");
    location.href = "../login/login.html";
  }
};

// // Ganti Akun

document.querySelector(".ganti-akun").onclick = () => {
  localStorage.removeItem("token");
  location.href = "../login/login.html";
};
