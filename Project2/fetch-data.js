// 1️⃣ Define the async function
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
  const dataContainer = document.getElementById('api-data');    // Container for displaying data

  // Show a loading message
  dataContainer.textContent = 'Loading user data...';

  try {
    // 2️⃣ Fetch the data
    const response = await fetch(apiUrl);

    // 3️⃣ Check if the response is ok (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 4️⃣ Convert response to JSON
    const users = await response.json();

    // 5️⃣ Clear the loading message
    dataContainer.innerHTML = '';

    // 6️⃣ Create a <ul> for the user list
    const userList = document.createElement('ul');

    // 7️⃣ Loop through users and append <li> elements
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name; // Display the user's name
      userList.appendChild(li);
    });

    // 8️⃣ Append the list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // 9️⃣ Error handling
    dataContainer.innerHTML = ''; // Clear existing content
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching users:', error);
  }
}

// 10️⃣ Invoke fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
