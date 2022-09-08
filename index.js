const EMPTY_HEART = '♡'
 const FULL_HEART = '♥'

const get = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'


 function content() {
  // fetch data from API
    fetch(get)
    .then(res => res.json())
    .then(function shift(data) {
      const article = document.querySelector('#all')
        data.drinks.forEach(drink => {
          const div = document.createElement('div')

          div.className = 'card'

         div.innerHTML += ` <img id='pic' src = '${drink.strDrinkThumb}'/> 
            <div> 
            <div class = "cute">${drink.strDrink}</div> 
             <div class = 'cuter'> ${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}, ${drink.strIngredient4}, ${drink.strIngredient5}, ${drink.strIngredient6}, ${drink.strIngredient7}</div> 
            <div class = 'cutest'>${drink.strInstructions} 
            <ol><span class="like-glyph">&#x2661;</span></ol>
            </div> 

            </div>`
             
            
            article.append(div)

              

               })
            

              // initialise liker

               const button = document.querySelectorAll('ol')
              
              
               $('ol').on('hover', '.like-glyph', function() { 
                button.forEach(item => { item.addEventListener("click", () => {
                  if (item.innerHTML === EMPTY_HEART) {
                    ( item.innerHTML = FULL_HEART) 
                    item.className = "activated-heart"
                  } else {
                    ( item.innerHTML = EMPTY_HEART)
                    item.className = ""
                    }
                  })
                  })})        
        })

        // log values of form to the page

        document.addEventListener("DOMContentLoaded", () => {
          let form = document.querySelector("#choose-ingredients")
          form.addEventListener("submit",(a) => {
            a.preventDefault()
            choices(a.target.choose.value)
            form.reset()
          })
        })
        
        // create elements of logged values from form
        function choices(choose) {
          let li = document.createElement("li")
          let btn = document.createElement("button")
          btn.addEventListener("click", out)
          btn.innerHTML = "x"
          li.innerHTML = `${choose}`
          li.appendChild(btn)
          console.log(li)
          document.querySelector("#pick").appendChild(li)
        }
        function out(b) {
          b.target.parentNode.remove()
        }  
        
        
        
        
}

document.addEventListener('DOMContentLoaded', content());


























































// document.addEventListener('DOMContentLoaded', content())

// function content() {
//     return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//     .then(response => response.json())
//     .then(data => (shift(data)))
// }


// function shift(data) {
//     const body = document.querySelector('body')
//     const div = document.createElement('div')
//     div.innerHTML = data.drinks.forEach(() => {
//         return (`${data.strDrink} ${data.strInstructions} ${data.strDrinkThumb}`)

//     });
//     body.append(div)
//     return data;
// }
        
        
//         (type) => {
//         const body = document.querySelector('body')
//         const drinks = Object.keys(type.drinks)
//        drinks.forEach( drink => {
//         const img = document.createElement('img');
//         img.setAttribute('src',`${drink}`)
//         body.appendChild(img)
//     })
// })
// }
//         type.drinks.forEach((drink) => {

            
//             // list.innerHTML += `<img src = '${breed}'/>`;
//             list.appendChild(img)
//         });
//     });
// }
    