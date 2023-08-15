const baseUrl = 'https://64d9d6c1e947d30a260a5bc4.mockapi.io/'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = 'my token from local storage';
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

async function fetchTodoList() {
  // const resp = await fetch(baseUrl + 'v1/todos');
  // const json = await resp.json();
  const json = await axios.get(baseUrl + 'v1/todos');
  console.log(json)

  return json.data; // [{}, {}]
}

async function addTodo(description) {
  // const payload = {
  //   id: 0,
  //   description,
  //   completed: false,
  //   createdAt: Date.now(),
  // }

  // const resp = await fetch(baseUrl + 'v1/todos', {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // });
  console.log('> saving todo', { description });

  const resp = await axios.post(baseUrl + 'v1/todos', {
    id: 0,
    description,
    completed: false,
    createdAt: Date.now(),
  });

  console.log('> todo saved', resp)
}

async function handleDelete(id) {
  // const resp = await fetch(baseUrl + 'v1/todos/' + id, {
  //   method: 'DELETE'
  // });
  // const json = await resp.json();
  await axios.delete(baseUrl + 'v1/todos/' + id);
}
