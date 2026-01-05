//your code here!
// Get the list element
const list = document.getElementById("infi-list");

// Track the current item number
let nextItemNumber = 1;

// Function to create and add a list item
function addListItem() {
  const li = document.createElement("li");
  li.textContent = `Item ${nextItemNumber}`;
  list.appendChild(li);
  nextItemNumber++;
}

// Function to add a given number of items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    addListItem();
  }
}

// Add 10 items initially
addItems(10);

// Check if user has scrolled to the end of the list
function checkScroll() {
  const { scrollTop, clientHeight, scrollHeight } = list;

  // If scrolled to the bottom, add 2 more items
  if (scrollTop + clientHeight >= scrollHeight - 1) {
    addItems(2);
  }
}

// Attach scroll event listener to the list
list.addEventListener("scroll", checkScroll);


