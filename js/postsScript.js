const select = selector => {
    return document.querySelector(selector);
  };
const postsTableBodyElement = select('#posts-list');
const postsFeedbackDiv = select('#msg-div-post');
const loadPosts = (userId) => {
  postsFeedbackDiv.innerHTML = 'Loading posts....';
 fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then((response) => {
    if(response.ok){
      return response.json();
    }else{
      postsFeedbackDiv.innerHTML = 'Oops, something went wrong retrieving user posts...';
    }
  })
  .then((json) => {
    if(!json.length){
        postsFeedbackDiv.innerHTML = 'No posts found!'; 
    }else{
    let tableRow = '';
    json.map((post) => {
      tableRow+="<tr>";
      tableRow+="<td> #"+post.id+"</td>";
      tableRow+="<td>"+post.title+"</td>";
      tableRow+="<td>"+post.body+"</td>";
      tableRow+="</tr>";
    });
    postsTableBodyElement.innerHTML = tableRow;
    postsFeedbackDiv.setAttribute("style", 'display: none;');
    }
  }).catch((error) => {
    postsFeedbackDiv.innerHTML = `Oops, error occured....: ${error}`;
  });
};
const urlSearchParams = new URLSearchParams(window.location.search);
const { userId } = Object.fromEntries(urlSearchParams.entries());
loadPosts(userId);
