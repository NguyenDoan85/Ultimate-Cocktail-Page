// Global variable
const searchCocktail = document.getElementById('cocktailBar');

// Add event listener to 
searchCocktail.addEventListener('change', () => {
    const searchValue = searchCocktail.value;
    getCocktailByName(searchValue);
})

// function for random cocktail by request through the API
function getRandomCocktail() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((cocktailData) => {
            displayRandomCocktail(cocktailData)
        })
        .catch((error) => {
            console.log(error)
        })
}