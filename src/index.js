// index.js
document.addEventListener("DOMContentLoaded", event => {

// Callbacks
const handleClick = (ramenData) => {
    // this callback function handles organizing data to appear in #ramen-detail when called 
    //set name
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

}; // closes handleClick declaration

const addSubmitListener = document.addEventListener("submit", (event => {
  event.preventDefault();
})); // closes addSubmitListener declaration


const displayRamens = function(ramenData) {
    //handle data to display ramens w/ <img> in div #ramen-menu
  const ramenMenu = document.querySelector("#ramen-menu");
  const ramenMenuImg = document.createElement("img");
  ramenMenuImg.src = ramenData.image
  ramenMenu.append(ramenMenuImg);
    // append ramenMenuImg, which is now displays the img of each element, as a child of #ramen-menu
  ramenMenuImg.addEventListener("click", (event) => {
    // add event listener here to listen for clicks on individual images and keep data together
    handleClick(ramenData)
    // callback function sets information to correct tags in #ramen-datail
  }); //closes event listener  
}; // closes displayRamens

const main = function() {
  fetch("http://localhost:3000/ramens")
    // retrieve data from API
  .then(response => {
    return response.json();
    // parse data to JavaScript Object
  })
  .then(ramenData => {
    // start using data from API
    ramenData.forEach(element => {
      displayRamens(element);
      // iterate over object and run displayRamens to start displaying imgs in #ramen-menu
    }) //closes forEach
  }); //closes last .then, finished using data

//addSubmitListener call will go here

};//closes main function

main(); 
// calls main function so it runs after DOM is loaded

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