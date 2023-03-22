import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightblue";
});

document.querySelector("h1").addEventListener("mouseout", function () {
  this.style.backgroundColor = "lightpink";
});

const nav = document.querySelector("nav");
const link = nav.getElementsByTagName("a");
nav.addEventListener("click", () => {
  for (let i = 0; i < link.length; i++) {
    link[i].style.backgroundColor = "lightblue";
  }
});

const head = document.querySelector("header");
document.addEventListener("scroll", () => {
  head.style.backgroundColor = "lightblue";
});

const son = document.querySelector("h4");
son.addEventListener("dblclick", () => {
  son.style.backgroundColor = "lightpink";
});

const muzik = document.querySelector("h2");
muzik.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href =
    "https://www.youtube.com/watch?v=edxLzNVVVEM&ab_channel=DokuzSekizM%C3%BCzik";
});

const x = document.querySelectorAll(".btn");
x.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "lightblue";
  });
});

x.forEach((div) => {
  div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "lightpink";
  });
});

const imgHepsi = document.querySelectorAll("img");

imgHepsi.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.2)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
