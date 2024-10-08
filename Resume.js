// Function to fetch data from an API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the JSON from the response
        const data = await response.json();
        
        // Handle the data
        console.log(data);
    } catch (error) {
        // Handle any errors
        console.error('Error fetching data:', error);
    }
}

// Example usage
fetchData('https://api.example.com/data');