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

document.querySelector(".set-profil").onclick = () => {
  location.href = "../profil/profil.html";
};

// // Ganti Akun

document.querySelector(".ganti-akun").onclick = () => {
  localStorage.removeItem("token");
  location.href = "../login/login.html";
};

// // Postingan

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

// // Follow

fetch("/api/restapitrs", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const saran = document.querySelector(".saran-follow");
    for (let i = 0; i < data.length; i++) {
      const divSar = document.createElement("div");
      divSar.className = "divsar";

      const sarFol = document.createElement("h5");
      sarFol.textContent = `${data[i].email}`;
      divSar.appendChild(sarFol);
      // sarfol.onclick = () => {
      //   fetch("", {
      //     method: "GET",
      //     headers: {
      //       "Content-Type" : "application/json"
      //     },
      //   }).then((res) => res.json()).then((dataufl) => {
      //     sarfol.textContent = dataufl;
      //   });
      // };

      const follow = document.createElement("button");
      follow.textContent = "Ikuti";
      divSar.appendChild(follow);
      // follow.onclick = () => {
      //   follow.textContent = "Mengikuti";
      //   fetch("", {
      //     method: "GET",
      //     headers: {
      //       "Content-Type" : "applicaton/json"
      //     },
      //   }).then((res1) => res1.json()).then((datafl) => {

      //   })
      // }

      saran.appendChild(divSar);
    }
  });
