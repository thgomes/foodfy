document.querySelector('.add-preparation-field').addEventListener('click', () => addField('preparation'))
document.querySelector('.add-ingredients-field').addEventListener('click', () => addField('ingredients'))

function addField(type) {
  let input = document.createElement('input')
  input.name = type

  let addButton = document.querySelector(`.add-${type}-field`)

  let container = addButton.parentNode

  container.insertBefore(input, addButton)
}