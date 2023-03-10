import * as model from './model.js'
import recipeView from './views/recipeView.js'; // recipeView : giờ đây là 1 thể hiện(đối tượng)
//npm i core-js regenerator-runtime --> Hỗ trợ cho các trình duyệt cũ có thể đọc các mã js hiện đại như async/await , arrow function,...
import 'core-js/stable'
import 'regenerator-runtime/runtime'


// https://forkify-api.herokuapp.com/v2 --> Lấy url API

///////////////////////////////////////


const controllerRecipe = async function(){
    try{
        //Page load with id , window.location: nhận url hiện tại
        const id = window.location.hash.slice(1)
        if(!id) return;

        //0)Hiệu ứng load phần recipe
        recipeView.renderSpinner()

        //1) Loading recipe
        await model.loadRecipe(id)

        //2)Rendering recipe
        recipeView.render(model.state.recipe)
        
    }
    catch(err){
        recipeView.renderError()
        console.error(`${err} 🔥🔥🔥`)
    }
}

//Page load with id
const init = function(){
  recipeView.addHandleRender(controllerRecipe)
}
init()



if(module.hot){
    module.hot.accept()
}


