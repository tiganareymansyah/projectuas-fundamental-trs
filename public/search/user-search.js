document.querySelector(".back").onclick = () => {
    location.href = "../beranda/beranda.html";
}

const searchParams = new URLSearchParams(location.search);

fetch(`/api/restapitrs/${searchParams.get("search")}`, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const trSearch = document.createElement("tr");

    const tdImg = document.createElement("td");
    const imgSearch = document.createElement("img");
    imgSearch.src = `../foto/${data.file_change_profil}`;
    trSearch.appendChild(tdImg);
    
    const tdEmail = document.createElement("td");
    tdEmail.textContent = data.email;
    trSearch.appendChild(tdEmail);

    const tdName = document.createElement("td");
    tdName.textContent = `${data.f_name} ${data.l_name}`;
    trSearch.appendChild(tdName);

    const tdDate = document.createElement("td");
    tdDate.textContent = data.temtanglah;
    trSearch.appendChild(tdDate);

    const tdJenkel = document.createElement("td");
    tdJenkel.textContent = data.jenkel;
    trSearch.appendChild(tdJenkel);

    
    document.querySelector("tbody").appendChild(trSearch);
  });
