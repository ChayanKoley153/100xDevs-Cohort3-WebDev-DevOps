// Create promisified version of  fetch

function promisifiedFetch(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => resolve(data)) 
      .catch((error) => reject(error)); 
  });
}

promisifiedFetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
