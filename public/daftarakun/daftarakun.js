document.daftar.onsubmit = async (event) => {
  event.preventDefault();
  const namaDepan = document.daftar.fname.value;
  const namaBelakang = document.daftar.lname.value;
  const email = document.daftar.email.value;
  const pwd = document.daftar.pwd.value;
  const date = `${document.daftar.tahun.value}-${document.daftar.bulan.value}-${document.daftar.tanggal.value}`;
  const jenKel = document.daftar.jenkel.value;
  await fetch("/api/restapitrs", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      namaDepan,
      namaBelakang,
      email,
      pwd,
      date,
      jenKel,
    }),
  });
  alert("Daftar akun telah berhasil");
  location.href = "../login/login.html";
};
