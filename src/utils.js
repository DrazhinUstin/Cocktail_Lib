const destructDrinksData = (drinks) => {
    return drinks.map((drink) => {
        const {
            idDrink: id,
            strDrink: name,
            strAlcoholic: alcoholic,
            strCategory: category,
            strDrinkThumb: image,
            strGlass: glass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strInstructions: instructions,
        } = drink;
        return {
            id,
            name,
            alcoholic,
            category,
            image,
            glass,
            ingredients: [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
            ],
            instructions,
        };
    });
};

export { destructDrinksData };
