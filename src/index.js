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
  // requests data from server to get all ramen objects
  // display image for each ramen using and <img> tag inside <div id="ramen-menu">
  // Add code
}; // closes displayRamens declaration

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
} // closes main declaration

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}; // closes export
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