//global variable
const searchCocktail = document.getElementById('cocktail');
var searchHistory = localStorage.getItem(searchHistory);

searchCocktail.textContent = searchHistory;

//event listener
searchCocktail.addEventListener('change', () => {
    const searchValue = searchCocktail.value;
    getCocktailByName(searchValue);
})

//function for search cocktail by name by request through API
function getCocktailByName(cocktail) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then((response) => response.json())
        .then((cocktailData) => {
            displayinputvalue(cocktailData)
        })
        .catch((error) => {
            console.log(error)
        })
    localStorage.setItem("searchHistory", JSON.stringify(cocktail))
}

//function that display info to the html
function displayinputvalue(cocktailData) {
    const { drinks } = cocktailData;
    const cocktailpictureElement = document.getElementById('cocktailPicture');
    let cocktailPicture = `
    <img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">`;

    cocktailpictureElement.innerHTML = cocktailPicture;

    //display title
    const cocktailTitleElement = document.getElementById('cocktailTitle');

    let cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <p class="typeOfglass">Type of glass:</p><p>${drinks[0].strGlass}</p>
    </br><p class="howToMake">How to make:</p>`

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