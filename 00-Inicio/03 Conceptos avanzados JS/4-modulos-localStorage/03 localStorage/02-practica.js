const formulario = document.getElementById("formulario");
const pintarTodo = document.getElementById("pintarTodo");
const templateTodo = document.getElementById("templateTodo").content;
const alert = document.querySelector(".alert");

let todos = [];

const agregarTodo = (todo) => {
  const objetoTodo = {
    nombre: todo,
    id: Date.now().toString(),
  };

  todos.push(objetoTodo);
  pintarTodos();
};

const pintarTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  pintarTodo.textContent = "";
  const fragment = document.createDocumentFragment();
  todos.forEach((item) => {
    const clone = templateTodo.cloneNode(true);
    clone.querySelector(".lead").textContent = item.nombre;
    clone.querySelector("button").dataset.idbutton = item.id;
    fragment.appendChild(clone);
  });
  pintarTodo.appendChild(fragment);
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-danger")) {
    todos = todos.filter((item) => item.id !== e.target.dataset.idbutton);
    pintarTodos();
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alert.classList.add("d-none");
  const datos = new FormData(formulario);
  const [todo] = [...datos.values()];
  if (!todo.trim()) {
    alert.classList.remove("d-none");
    return;
  }
  agregarTodo(todo);
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    pintarTodos()
  }
});
