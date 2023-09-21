"use strict"

const form = document.forms['add_from'],
    box = document.querySelector(".laugh_box");
      
// API ssilkasi event listenerni ichida qolib ketgan, ya`ni u lokal o'zgaruvchi ichida qolib ketgan edi. Global tomonga olib chiqmim chunki u 31-qatorda ishlatiladi
 const APIurl = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

form.addEventListener("submit", e => {
    box.classList.remove("show");
    e.preventDefault();
    box.style.display = 'flex';

    sendRequest("GET", APIurl)
        .then(data => {
            renderInfo(data); // data[0] emas data ni o'zi bo'ladi
        })
})

function sendRequest(method, url) {
    return fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json(); // bu yerda esa return o'rnida console.log turgandi keyingi callback funcksiyaga ma`lumot berilmayotgandi
            } else{
                return response; // bu yerda ham shunday
            }
        })
}

let value = sendRequest("GET", APIurl);

function renderInfo(data) {
    box.classList.add("show"); 
    box.textContent = data.joke; // box ichidagi hazil text ana shu yerda to'ldiriladi siz esa kodni boshida box ichida ssilkani chiqarmoqchi bo'layotgan ediz
}