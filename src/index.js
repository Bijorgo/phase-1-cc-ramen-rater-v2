// index.js
document.addEventListener("DOMContentLoaded", event => {
  //main ();
  //displayRamens();


  

// Callbacks
const handleClick = (ramenData) => {
  //const ramenMenuDiv = document.querySelector("#ramen-menu")
  //console.log(ramenMenuDiv)
    // This next forEach loop will display the img of each ramen in ramens inside of <div id="ramen-menu">
    //ramenData.forEach(element => {
      // Create -> modify -> append          
    //take img and set more information // we want name, restaurant, rating, and comment
    // set text of name
    //const ramenMenu = document.querySelector("#ramen-menu");
    const ramenNameClass = document.querySelector('.name');
    ramenNameClass.textContent = ramenData.name;

    //set img
    const ramenImgClicked = document.querySelector('.detail-image');
    ramenImgClicked.src = ramenData.image;
    //set restaurant
    const ramenRestClick = document.querySelector('.restaurant');
    ramenRestClick.textContent = ramenData.restaurant;
    //set rating
    const ramenRatingClick = document.querySelector("#rating-display");
    ramenRatingClick.textContent = ramenData.rating;
    //set comment 
    const ramenCommentClick = document.querySelector("#comment-display");
    ramenCommentClick.textContent = ramenData.comment;
  //});
    
  // when an img from #ramen-menu is clicked, display all info in #ramen-detail div (insert comment and instert rating here)

}; // closes handleClick declaration







const addSubmitListener = document.addEventListener("submit", (event => {
  event.preventDefault();
})); // closes addSubmitListener declaration








const displayRamens = function(ramenData) {
    //then display ramens w/ <img> in div #ramen-menu
  const ramenMenu = document.querySelector("#ramen-menu");
  const ramenMenuImg = document.createElement("img");
  ramenMenuImg.src = ramenData.image
   
  ramenMenu.append(ramenMenuImg);
    // append ramenMenuImg, which is now displays the img of each element, as a child of #ramen-menu
    // Take ramen-detail and show img in div #ramen-menu
  ramenMenuImg.addEventListener("click", (event) => {
    handleClick(ramenData)
  }); //closes event listener  
};


  fetch("http://localhost:3000/ramens")
    
  .then(response => {
    return response.json();
  })
  .then(ramenData => {
    ramenData.forEach(element => {
      displayRamens(element);
    })
    
 
  });





  
  
//}; // closes displayRamens declaration which holds fetch request and img display

/*
function main() { 
  displayRamens();
  //addSubmitListener();
 
}; //closes main function
*/

}); // closes DOMContentLoaded event listener 




// Export functions for testing     DONT DELETE THIS
/*
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}; // closes export
*/







// ASYNC VERSION

/*
async function main() {
  const response = await fetch("http://localhost:3000/ramens"); // requests data from server to get all ramen objects, NO ; HERE
  const ramenData = await response.json();
  //.then((response) => response.json()) // if connection sucessful, then take info and turn it into json
    displayRamens(ramenData)
    handleClick(ramenData)

 */

// NON ASYNC VERSION
/*
fetch("http://localhost:3000/ramens")
    
    .then(response => response.json())
    
    .then(ramenData => {
*/



// new-ramen form to retrieve input info from user is in HTML
// attach event listener to new-ramen form using addSubmitListener
// after a submit, add it to #ramen-menu div
// OK if it goes away on refresh

//json-server db.json or modify path


//NOTES:
  //need:
    // main () should invoke displayRamens and addSubmitListener after DOM has loaded 


    // displayRamens() requests data from the server to get ramen objects 
      //then display ramens w/ <img> in div #ramen-menu

      // handleClick() => a call backfunction uesd to see all info when img clicked
        //display in #ramen-detail div

      // addSubmitListener() => a callback to be attached to new-ramen form
        //add new ramen from form to #ramen-menu div




/*
ADVANCED DELIVERABLES

1. see details for first ramen as soon as page loads w/o clicking on it
2. update rating and comment for a ramen by submitting a form. Refelct changes on the frontend
3. delete button/function - removed from ramen-menu and isnt displayed in ramen-detail
4.Extra Advanced Deliverables
      You'll need these endpoints for the advanced deliverables:

      POST /ramens
      DELETE /ramens/:id
      PATCH /ramens/:id
      As a user, I can:

      persist my updates to a ramen's rating and comment. (PATCH request)
      persist new ramens that I create (POST request)
      persist any ramen deletions (DELETE request)
*/