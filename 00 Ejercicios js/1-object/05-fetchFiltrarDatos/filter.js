const input = document.querySelector("#searchInput");
const usersList = document.querySelector("#users");
let users = [];

//DOMContentLoaded: Este evento se dispara cuando el HTML ha sido completamente cargado
window.addEventListener("DOMContentLoaded", async () => {
  usersList.innerHTML = "<h2>Loading....</h2>";
  const data = await loadUsers();
  users = data.data;
  renderUsers(users);
});

//Obtener usuarios de la API
async function loadUsers() {
  const response = await fetch(
    "https://fakerapi.it/api/v1/users?_quantity=1000"
  );
  return (data = await response.json());
}

//Creamos los <li> para cada objeto
const createUserItem = (users) =>
  users
    .map(
      (user) =>
        `<li class="py-2 hover:bg-teal-950">${user.firstname} ${user.lastname}</li>`
    )
    .join(" ");

//Insertamos elementos al <lo>
function renderUsers(users) {
  const usersString = createUserItem(users);
  usersList.innerHTML = usersString;
}

//Filtrar datos
input.addEventListener("keyup", (e) => {
  const newUsers = users.filter((user) =>
    `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase())
  );
  renderUsers(newUsers);
});
