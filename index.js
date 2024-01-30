const buttonMenu = document.getElementById("menu")
const nav = document.getElementById('navigasi')
const menu = () => {
  nav.classList.toggle('left')
  if (buttonMenu.innerText === '=') {
    return buttonMenu.innerText = 'x'
  } else if (buttonMenu.innerText == 'x') {
    return buttonMenu.innerText = '='
  }
}