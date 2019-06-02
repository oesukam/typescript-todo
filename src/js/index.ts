const myTodos = [
  {
    createdAt: new Date(),
    text: 'My todo',
    done: false,
    deleting: false,
  },
];

const addTodo = e => {
  const { value } = e.target;
  if (value) {
    const todo = {
      createdAt: new Date(),
      text: value,
      done: false,
      deleting: false,
    };
    myTodos.unshift(todo);
  }
};

const renderTodos = () => {
  const todos = myTodos
    .map(
      (todo, index) => `
      <div class="todo">
        <div class="todo__index">${Number(index) + 1}.</div>
        <div class="todo__text">${todo.text}</div>
        <div class="todo__actions">
          <button id="check-${todo.createdAt}" class="btn btn-light btn-check">
            <i class="fa fa-check-circle ${todo.done ? 'active' : ''}" ></i>
          </button>
          <button id="delete-${
            todo.createdAt
          }" class="btn btn-light btn-delete">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    `,
    )
    .join(' ');
  document.querySelector('.my-todos').innerHTML = todos;
};

(() => {
  /* Add events listenners */

  document.querySelector('#input-text').addEventListener('change', addTodo);

  renderTodos();
})();
