// index.js
document.addEventListener("DOMContentLoaded", event => {

  // this callback function handles organizing data to appear in #ramen-detail when called
  const handleClick = (ramenData) => {
      //set name
    const ramenNameDetail = document.querySelector('.name');
    ramenNameDetail.textContent = ramenData.name;
    //set img
    const ramenImgDetail = document.querySelector('.detail-image');
    ramenImgDetail.src = ramenData.image;
    //set restaurant
    const ramenRestDetail = document.querySelector('.restaurant');
    ramenRestDetail.textContent = ramenData.restaurant;
    //set rating
    const ramenRatingDetail = document.querySelector("#rating-display");
    ramenRatingDetail.textContent = ramenData.rating;
    //set comment 
    const ramenCommentDetail = document.querySelector("#comment-display");
    ramenCommentDetail.textContent = ramenData.comment;
  }; // closes handleClick declaration

  // this function will, upon submit, take input from form, display on menu, and display all info upon upon click
  const addSubmitListener = () => {
    const newRamenForm = document.querySelector("#new-ramen");
    // this function listens for the submit event and dictates what to do
    newRamenForm.addEventListener("submit", (event => {
      event.preventDefault(); // prevents redirect of page
      // take form info(as an object), pass through displayRamens() to add to menu
      displayRamens({
        "name": event.target['name'].value,
        // since displayRamens calls handleClick, we need the following information to display in #ramen-detail upon click
        "restaurant": event.target['new-restaurant'].value,
        "image": event.target['new-image'].value,
        "rating": event.target['new-rating'].value,
        "comment": event.target['new-comment'].value,
      }); // closes displayRamens with object passed

    })); //closes eventListener
  }; // closes addSubmitListener declaration


  const displayRamens = function(ramenData) {
      //handle data to display ramens w/ <img> in div #ramen-menu
    const ramenMenu = document.querySelector("#ramen-menu");
    const ramenMenuImg = document.createElement("img");
    ramenMenuImg.src = ramenData.image
    ramenMenu.append(ramenMenuImg);
      // append ramenMenuImg, which now displays the img of each element, as a child of #ramen-menu
    ramenMenuImg.addEventListener("click", (event) => {
      // add event listener here to listen for clicks on individual images and keep data together
      handleClick(ramenData)
      // callback function sets information to correct tags in #ramen-datail
    }); //closes event listener  
  }; // closes displayRamens

  // main function fetches API data, then dictates what to do with data
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
        // iterate over object and run displayRamens to start displaying API imgs in #ramen-menu
          //displayRamens contains a callback function that will display data in #ramen-menu when img is clicked 
      }) //closes forEach
    }); //closes last .then, finished using data

    addSubmitListener(); // funtion call listens for form submission, dictates when and where to display input information

  };//closes main function

  main(); 
  // calls main function so it runs after DOM is loaded

}); // closes DOMContentLoaded event listener 



/*
// Export functions for testing 
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}; // closes export

*/





// ASYNC/AWAIT VERSION

/*
async function main() {
  const response = await fetch("http://localhost:3000/ramens"); // requests data from server to get all ramen objects, NO ; HERE
  const ramenData = await response.json();
  //.then((response) => response.json()) // if connection sucessful, then take info and turn it into json
 */

// NON ASYNC/AWAIT VERSION
/*
fetch("http://localhost:3000/ramens")
    
    .then(response => response.json())
    
    .then(ramenData => {
*/






//NOTES:
  //need:
    // main () should invoke displayRamens and addSubmitListener after DOM has loaded 


    // DONE displayRamens() requests data from the server to get ramen objects //then display ramens w/ <img> in div #ramen-menu

      // DONE handleClick() => a call backfunction uesd to see all info when img clicked //display in #ramen-detail div

      // addSubmitListener() => a callback to be attached to new-ramen form
        //add new ramen from form to #ramen-menu div

  // to access JSON server: json-server db.json or modify path


  // ALT FOR FORM DISPLAY
  /*
    
    // store information from form in a variable for each input
    const newRamenName = document.querySelector("#new-name");
    const newRamenRest = document.querySelector("#new-restaurant");
    const newRamenImg = document.querySelector("#new-image");
    const newRamenRating = document.querySelector("#new-rating");
    const newRamenComment = document.querySelector("#new-comment")
    
    // take form information and display in #ramen-deatil
    const ramenNameDetail = document.querySelector('.name');
    ramenNameDetail.textContent = newRamenName.value;  
    const ramenRestDetail = document.querySelector('.restaurant');
    ramenRestDetail.textContent = newRamenRest.value;
    const ramenImgDetail = document.querySelector('.detail-image');
    ramenImgDetail.src = newRamenImg.value;
    const ramenRatingDetail = document.querySelector("#rating-display");
    ramenRatingDetail.textContent = newRamenRating.value;
    const ramenCommentDetail = document.querySelector("#comment-display");
    ramenCommentDetail.textContent = newRamenComment.value;
    */


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