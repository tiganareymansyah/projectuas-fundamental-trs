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

document.querySelector(".set-pengaturan").onclick = () => {
  location.href = "../pengaturan/pengaturan.html";
};

// // Ganti Akun

document.querySelector(".ganti-akun").onclick = () => {
  localStorage.removeItem("token");
  location.href = "../login/login.html";
};

// // tampil postingan di profil

fetch("/api/restapitrs/berpost", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const box = document.querySelector(".postingan");

    for (let a = 0; a < data.length; a++) {
      const postBox = document.createElement("div");
      postBox.className = "post-box";

      const postAuthor = document.createElement("div");
      postAuthor.textContent = data[a].email;
      postBox.appendChild(postAuthor);

      const postPhoto = document.createElement("img");
      postPhoto.src = `/foto/${data[a].post_file}`;
      postBox.appendChild(postPhoto);

      const lc = document.createElement("div");
      lc.className = "LikCom";

      const postLike = document.createElement("img");
      postLike.src = "../image/like.png";
      lc.appendChild(postLike);

      const postComment = document.createElement("img");
      postComment.src = "../image/comment.png";
      lc.appendChild(postComment);

      postBox.appendChild(lc);

      const postCaption = document.createElement("div");
      postCaption.textContent = `${data[a].post_caption}`;
      postBox.appendChild(postCaption);
      // const postboxlike = document.createElement("div");

      box.appendChild(postBox);
    }
  });

// // Ganti profil

document.changeprofil.onsubmit = async (event) => {
  event.preventDefault();
  const chapp = new FormData();
  chapp.append("foto", document.changeprofil.filepp.files[0]);
  await fetch("/api/restapitrs/changepp", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: chapp,
  });
  alert("Berhasil di ganti");
  location.reload();
};

// // Tampil PP
  
fetch("/api/me", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const tamPro = document.querySelector(".tampil-profil");
    const img = document.createElement("img");
    img.src = `/foto/${data.file_change_profil}`;
    tamPro.appendChild(img);

    const profilusername = document.createElement("div");
    profilusername.className = "profilusername";
    profilusername.textContent = data.email;
    tamPro.appendChild(profilusername);
  });
