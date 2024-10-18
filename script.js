// List of items to be added dynamically
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

// Function to update the HTML list
function updateList() {
    const itemList = document.getElementById('itemList');
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });
}

// Call the function to update the list
updateList();