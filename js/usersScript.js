const select = selector => {
    return document.querySelector(selector);
  };
const tableBodyElement = select('#users-list');
const feedbackDivElement = select('#msg-div');
const postsTableBodyElement = select('#posts-list');
const postsFeedbackDiv = select('#msg-div-post');
const loadUsers = () => {
  feedbackDivElement.innerHTML = 'Loading users....';
 fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if(response.ok){
      return response.json();
    }else{
      feedbackDivElement.innerHTML = 'Oops, something went wrong retrieving users...';
    }
  })
  .then((json) => {
    if(!json.length){
      feedbackDivElement.innerHTML = 'No users found!'; 
  }else{
    let tableRow = '';
    json.map((user) => {
      tableRow+="<tr>";
      tableRow+="<td>"+user.name+"</td>";
      tableRow+="<td>"+user.email+"</td>";
      tableRow+=`<td><button onClick='getPosts(${user.id});' class='getUserButton'>Get User’s Posts</button></td>`; 
      tableRow+="</tr>";
    });
    tableBodyElement.innerHTML = tableRow;
    feedbackDivElement.setAttribute("style", 'display: none;');
  }
  }).catch((error) => {
    feedbackDivElement.innerHTML = `Oops, error occured....: ${error}`;
  });
};
const getPosts = (userId) => {
 window.location.href = `../pages/posts.html?userId=${userId}`;
};
loadUsers();
