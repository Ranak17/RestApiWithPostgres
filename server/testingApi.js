fetch('http://localhost:3005/users/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'value1',
    password: 'value2'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
