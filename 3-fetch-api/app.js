function renderTodoList(arr) {
  const html = arr.map(({ id, description, completed }) => `
    <div class="todo-item" data-id="${id}">
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

async function handleSave() {
  const value = document.getElementById('input-text').value;
  if (!value) {
    return;
  }

  await addTodo(value); // submit data
  await onLoad(); // reload data
}

document.getElementById('input-text').addEventListener('change', async function(e) {
  await handleSave();

  e.target.value = '';
  // this.value = '';
});

function isElement(ele, type, classSelector) {
  return ele.tagName.toLowerCase() === type?.toLowerCase() && (classSelector?.length > 0 && ele.classList.contains(classSelector));
}

function getTodoId(ele) {
  return ele.getAttribute('data-id');
}

document.getElementById('result').addEventListener('click', function(e) {
  console.log(e, e.target);

  if (isElement(e.target, 'button', 'btn-delete')) {
    // handle delete
    const todoEle = e.target.closest('.todo-item');
    const id = getTodoId(todoEle);

    handleDelete(id).then(() => {
      todoEle.remove();
    });
  }
});
