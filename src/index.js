// index.js
document.addEventListener("DOMContentLoaded", event => {


// Callbacks
const handleClick = (ramen) => {
  // Add code
  // when an img from #ramen-menu is clicked, display all info in #ramen-menu div (insert comment and inster rating here)
}; // closes handleClick declaration 

const addSubmitListener = document.addEventListener("submit", (event => {
  event.preventDefault();
})); // closes addSubmitListener declaration

const displayRamens = () => {
  fetch("http://localhost:3000/ramens") // requests data from server to get all ramen objects, NO ; HERE
  .then((response) => response.json()) // if connection sucessful, then take info and turn it into json
  .then((ramenData) => {
        //console.log(ramenData)
    //need to create forEach loop
    const ramens = ramenData//[0].image
    
    ramens.forEach(element => {
          //console.log(element + "How Many?") //5

          // Create -> modify -> append
      const ramenMenu = document.querySelector("#ramen-menu")
      const ramenMenuItem = document.createElement("img")
      
      //console.log(ramenMenu + "First")
        //create <img>
        // now, we want to select "image" and take value, append to <img>
    ramenMenuItem.src = element.image
    ramenMenu.append(ramenMenuItem)
      
      //ramenMenu.append.ramenMenuItem
      
        // display image for each ramen using and <img> tag inside <div id="ramen-menu">
    });
        //console.log(ramenImg)
    // we will need to do something with that data here
    // traverse objects to find img
    

  }) //closes .then(ramenData) 

  .catch(error => {console.error(error)});
  
}; // closes displayRamens declaration

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
} // closes main declaration

main()
displayRamens();

// Export functions for testing
/*
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}; // closes export
*/
}); // closes DOMContentLoaded event listener 

// new-ramen form to retrieve input info from user is in HTML
// attach event listener to new-ramen form using addSubmitListener
// after a submit, add it to #ramen-menu div
// OK if it goes away on refresh

//json-server db.json or modify path

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