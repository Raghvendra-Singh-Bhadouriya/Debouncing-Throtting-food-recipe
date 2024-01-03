let searchBar=document.getElementById("searchBar");
let id;
searchBar.addEventListener("input",function(){
    
    clearInterval(id);


     id = setTimeout(() => {
        //container.textContent=searchBar.value;
        searchRecipe(searchBar.value);
    },1000);
})



async function searchRecipe(query){
    try{
       let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
       let finalres = await res.json();
       displayData(finalres.meals);
        //console.log(finalres);
    }
    catch (error){
        console.log("Recipe Not Found");
    }
}

function displayData(recipes){
    let container=document.getElementById("container");
    //console.log(recipes);
    container.innerHTML="";
   
        if(recipes != null){
            recipes.forEach((recipe) =>{
                //console.log(recipe);
            container.innerHTML +=`
            <div id="recipe-card">
            <img src =${recipe.strMealThumb}>
            <h3>${recipe.strMeal}</h3>
            <p id="category">Category: ${recipe.strCategory}</p>
            </div>
            `
            });
        }else if(recipes == null){
            //console.log("not found");
           container.innerHTML += '<p id="not-found">Recipe Not Found...</p>'
        }
}