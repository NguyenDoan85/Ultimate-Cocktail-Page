// Global variable
const searchCocktail = document.getElementById('cocktail');

// Add event listener to 
searchCocktail.addEventListener('change', () => {
    const searchValue = searchCocktail.value;
    getCocktailByName(searchValue);
})

// function for random cocktail by request through the API
function randomCocktail() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((cocktailData) => {
            displayRandomCocktail(cocktailData)
        })
        .catch((error) => {
            console.log(error)
        })
}

//function to display random cocktail in the html
function displayRandomCocktail(cocktailData) {
    const { drinks } = cocktailData;
    const cocktailpictureElement = document.getElementById('cocktailPicture');
    let cocktailPicture = `<img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">`;

    cocktailpictureElement.innerHTML = cocktailPicture;

    //display title
    const cocktailTitleElement = document.getElementById('cocktailTitle');

    let cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <p class="typeOfglass">Type of glass:</p><p>${drinks[0].strGlass}</p>
    </br><p class="howToMake"></p>`

    cocktailTitleElement.innerHTML = cocktailInfo;


    //display ingredients
    const cocktailInfoElement = document.getElementById('howTo');

    let result = '';
    for (var i = 1; i <= 15; i++) {
        let measures = 'strMeasure' + i;
        let ingridients = 'strIngredient' + i;
        if ((drinks[0][measures]) && (drinks[0][ingridients]) !== "") {
            result = result + ` <p>${drinks[0][measures]} ${drinks[0][ingridients]}</p>`;

            cocktailInfoElement.innerHTML = result;
        };
    }


    //display instructions
    const cocktailInstructionsElement = document.getElementById('instructions');
    let instructions = `
    </br><p>${drinks[0].strInstructions}</p>`;

    cocktailInstructionsElement.innerHTML = instructions;

}