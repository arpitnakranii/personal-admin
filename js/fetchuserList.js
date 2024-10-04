
async function fetchUserData() {
  try {
    // Fetching user data from API (replace with your API endpoint)
    const response = await fetch('http://localhost:5050/get-user');
    const users = await response.json(); // Assuming the response is JSON
    console.log(users['data'])
    // Getting reference to the table body
    const tableBody = document.querySelector('#example tbody');

    // Iterating over the user list and creating table rows
    users['data'].forEach(user => {
      // Create a new table row
      const row = document.createElement('tr');

      // Create a table data element for each field (ID, Name, Email)
      const idCell = document.createElement('td');
      idCell.textContent = user._id;

      const nameCell = document.createElement('td');
      nameCell.textContent = user.username;

      const emailCell = document.createElement('td');
      emailCell.textContent = user.email;

      const passwordCell = document.createElement('td');
      passwordCell.textContent = user.password;

      // Append the cells to the row
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(passwordCell);

      // Append the row to the table body
      tableBody.appendChild(row);

      $(document).ready(function () {
        $('#example').DataTable();
      })
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

// Call the function to fetch and display data
fetchUserData();

