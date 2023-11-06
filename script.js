function toggleMode() {
  const html = document.documentElement
  // Metodo usando a function toogle
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  img.setAttribute("src", "assets/avatar-light.png")

  if (html.classList.contains("light")) {
  } else {
    img.setAttribute("src", "assets/avatar.png")
  } 
}
