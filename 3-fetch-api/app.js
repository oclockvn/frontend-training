function renderTodoList(arr) {
  const html = arr.map(({ id, description, completed }) => `
    <div class="todo-item">
    <div class="description">${description}</div>
    <button type="button" class="btn-done">Mark Done</button>
    <button type="button" class="btn-delete">Delete</button>
  </div>
  `).join('')

  // let html = '';

  // for (let todo of json) {
  //   const {id, description, completed} = todo;
  //   html += `
  //   <div class="todo-item">
  //   <div class="description">${description}</div>
  //   <button type="button" class="btn-done">Mark Done</button>
  //   <button type="button" class="btn-delete">Delete</button>
  // </div>`
  // }

  document.getElementById('result').innerHTML = html;
}

async function onLoad() {
  const arr = await fetchTodoList();
  renderTodoList(arr);
}

onLoad();
