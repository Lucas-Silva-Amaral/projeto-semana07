const btnMobile = document.querySelector(".navbar-burger")
const nav = document.querySelector(".navbar")
const btnClose = document.querySelector(".navbar-close")
const btnMenu = document.querySelector("#btn-mobile")
const form = document.querySelector("form")
const menuMobile = document.querySelector(".links-mobile")

btnMobile.addEventListener("click", () => {
  nav.classList.toggle("active")
  if (nav.classList.contains("active")) {
    btnMobile.innerHTML = `<svg class="close" width="18" height="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2.12305L13 14.123L10.5 11.623L8 9.12305M1 14.123L13 1.87695" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
  } else {
    btnMobile.innerHTML = `<svg
      id="btn-mobile"
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H17M1 7H17M10 13H17"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`
  }
  if (nav.classList.contains("active")) {
    menuMobile.classList.add("active")
  } else {
    menuMobile.classList.remove("active")
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    nav.classList.remove("active")
  } else {
    nav.classList.add("active")
  }
})

// FORMULARIO

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = new FormData(form)

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }
  console.log(`${data.name} ${data.email} ${data.message}`)
})
