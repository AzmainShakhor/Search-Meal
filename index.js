

     let inputText = document.getElementById("inputText")
     let search = document.getElementById("basic-addon2")

           function fetchUser(){
            let url = ` https://themealdb.com/api/json/v1/1/search.php?s=${inputText.value}`
            fetch(url)
           .then(res => res.json())
           .then(data => dataUser(data))}
                            
 




let card = document.getElementById("card")
let firstPage = document.getElementById("front-page")
let detailContent = document.querySelector(".detail-content")
let recipeCloseBtn = document.getElementById("close-recipe")
        
        
 function dataUser(allmeals){
    let meals = allmeals.meals

    for(meal of meals){
        // console.log(meal)
        card.innerHTML += `
        <div class="col">
       <div class="card">
         <img src=${meal.strMealThumb} class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(0,60)}....</p>

           <button onclick="loadDeatiles('${meal.idMeal}')"class="btn btn-success">View Details</button>
         </div>
       </div>
     </div>       `
    }

    inputText.value= ""

}




search.addEventListener("click" , () => {
  fetchUser()
  card.innerHTML= ""
 })







    function loadDeatiles(mealId){
         let url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res => res.json() )
        .then(data => detailMeal(data.meals[0]))
    }
       let detail = document.querySelector(".main-detail")
       let details = document.querySelector(".details")
    function detailMeal(data){


      detailContent.innerHTML += `
       <h2>Meal Name : ${data.strMeal}</h2>
       <img src="" alt="">
       <p>${data.strInstructions}</p> 
       <a href="${data.strYoutube} ">Watch video</a>
      
      `
      // detailContent.parentElement.classList.add('showRecipe')
      search.style.display = "block"
      detail.style.display = "block"


    }
    recipeCloseBtn.addEventListener("click", () => {
       detailContent.parentElement.remove()
    })

