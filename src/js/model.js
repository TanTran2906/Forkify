import { async } from "regenerator-runtime"; //Tự sinh ra khi dùng async
import {API_URL} from "./config.js"
import { getJSON } from "./helpers";

export const state = {
    recipe: {},
}
export const loadRecipe = async function(id){
    try{
        
        const data = await getJSON(`${API_URL}${id}`)

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
        throw err;
    }
}