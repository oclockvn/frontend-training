const baseUrl = 'https://64d9d6c1e947d30a260a5bc4.mockapi.io/'

async function fetchTodoList() {
  const resp = await fetch(baseUrl + 'v1/todos');
  const json = await resp.json();

  return json; // [{}, {}]
}
