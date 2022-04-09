// Método 1 - Scroll Suave para o topo

// const btn = document.querySelector("#topo")

// btn.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   })
// })


// Método 2 - Scroll suave para o tpo
const btn = document.querySelector("#topo")

function teste() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

btn.addEventListener('click', teste)