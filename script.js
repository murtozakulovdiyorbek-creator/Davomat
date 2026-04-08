// JavaScript functionality for Davomat Tizimi

// Function to save data to localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to get data from localStorage
function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Function to remove data from localStorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// Example usage
const exampleData = { name: 'Davomat Tizimi', version: '1.0.0' };

// Save example data
saveToLocalStorage('appData', exampleData);

// Retrieve example data
const retrievedData = getFromLocalStorage('appData');
console.log(retrievedData);

// Remove example data
removeFromLocalStorage('appData');