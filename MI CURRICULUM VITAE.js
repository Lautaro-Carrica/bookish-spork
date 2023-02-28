const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});


document.getElementById('button').addEventListener('click', function() {
  console.log("Hola mundo desde EventListener");
  document.getElementById('button').innerHTML = "<a href='https://developer.mozilla.org/en-US/' target='_blank'>WWW.DESARROLLOWEB.COM</a>";
}) 

const mostrarInfoBtn = document.getElementById("mostrar-info");
const infoPersonal = document.getElementById("info-personal");

mostrarInfoBtn.addEventListener("click", function() {
  infoPersonal.style.display = "block";
});
