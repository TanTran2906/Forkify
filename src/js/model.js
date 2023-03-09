import { async } from "regenerator-runtime"; //Tự sinh ra khi dùng async


export const state = {
    recipe: {},
}
export const loadRecipe = async function(id){
    try{
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();
        
        if(!res.ok) throw new Error(`${data.message} ${data.status}`)

        //Sửa lại các key của object của data trả về cho dễ sử dụng
        const {recipe} = data.data
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        }
        
    }
    catch(err){
        console.error(err);
    }
}