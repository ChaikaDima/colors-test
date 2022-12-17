const buttons = document.querySelectorAll('button')
const items = document.querySelectorAll('.item')
const [...myButtons] = buttons
const [...myItems] = items
let itemX = null

myItems.map((item) => (itemX = item.clientWidth))
myButtons.map(
  (button) => (button.style.left = `${itemX / 2 - button.clientWidth / 2}px`)
)
