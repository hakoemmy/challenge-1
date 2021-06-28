const select = selector => {
    return document.querySelector(selector);
  };

const tableBodyElement = select('#users-list');
const loadUsers = () => {
  
 const users = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => console.log(json));
};

loadUsers();
