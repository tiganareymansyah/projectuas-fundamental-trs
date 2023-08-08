document.login.onsubmit = async (event) => {
  event.preventDefault();
  const email = document.login.email.value;
  const pwd = document.login.pwd.value;
  const signin = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      pwd,
    }),
  });
  if (signin.ok) {
    const token = await signin.text();
    localStorage.setItem("token", token);
    location.href = "/beranda/beranda.html";
  } else {
    const message = await signin.text();
    alert(message);
    location.reload();
  }
};

document.querySelector("#daftar-akun").onclick = () =>
  (location.href = "../daftarakun/daftarakun.html");
