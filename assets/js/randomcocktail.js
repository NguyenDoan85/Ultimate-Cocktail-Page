// Global variable
var randomClick = document.getElementById('randomBt');

 //Event listener to random button
randomClick.addEventListener("click", function() {
    getRandomCocktail();
  });

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
};

//function to display random cocktail in the html
function displayRandomCocktail(cocktailData) {
    const { drinks } = cocktailData;
    const cocktailPicEl = document.getElementById('cocktailPicture');
    let cocktailPicture = `<img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">`;

    cocktailPicEl.innerHTML = cocktailPicture;

    //display title
    const cocktailTitleEl = document.getElementById('cocktailTitle');

    let cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <p class="typeOfglass">Type of glass:</p><p>${drinks[0].strGlass}</p>
    </br><p class="howToMake"></p>`

    cocktailTitleEl.innerHTML = cocktailInfo;


    //display ingredients
    const cocktailInfoEl = document.getElementById('howTo');

    let result = '';
    for (var i = 1; i <= 15; i++) {
        let measures = 'strMeasure' + i;
        let ingridients = 'strIngredient' + i;
        if ((drinks[0][measures]) && (drinks[0][ingridients]) !== "") {
            result = result + ` <p>${drinks[0][measures]} ${drinks[0][ingridients]}</p>`;

            cocktailInfoEl.innerHTML = result;
        };
    };  

    //display instructions
    const cocktailInstEl = document.getElementById('instructions');
    let instructions = `
    </br><p>${drinks[0].strInstructions}</p>`;

    cocktailInstEl.innerHTML = instructions;

};

