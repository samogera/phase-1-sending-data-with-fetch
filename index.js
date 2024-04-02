function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const requestBody = {
    name,
    email,
  };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Send the POST request and return the promise.
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      // Parse the response and return the JSON object.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Add the new id to the DOM.
      const newId = document.createElement('div');
      newId.textContent = `New user id: ${data.id}`;
      document.body.appendChild(newId);
      return data;
    })
    .catch((error) => {
      // Append the error message to the DOM.
      const errorMessage = document.createElement('div');
      errorMessage.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMessage);
    });
}