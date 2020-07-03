const recipeCards = document.querySelectorAll('.recipe-card')

for (let recipeCard of recipeCards) {
  recipeCard.addEventListener('click', function() {
    const recipeId = recipeCard.getAttribute('id')
    window.location.href = `/details?id=${recipeId}`
  })
}


