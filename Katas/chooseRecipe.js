// We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

// We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.


const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
const bakeryB = ['milk', 'butter', 'cream cheese']
const recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
]

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
    const allIngredients = [...bakeryA, ...bakeryB]
    let validRecipe = '';
    recipes.forEach(recipe => {
        for (let i = 0; i < recipe.ingredients.length; i++) {
            let firstIngredient = recipe.ingredients[i]
            let secondIngredient = recipe.ingredients[i+1]
            if (allIngredients.includes(firstIngredient) && allIngredients.includes(secondIngredient)) {
                validRecipe = recipe.name
            }
        }
    });

    return validRecipe;
}

console.log(chooseRecipe(bakeryA, bakeryB, recipes))