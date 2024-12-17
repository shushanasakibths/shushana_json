//js

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/');
    let users = await response.json();
    return users;
}

async function getComments() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/');
    let comments = await response.json();
    return comments;
}

Promise.all([getUsers(), getComments()])
    .then(([users, comments]) => {
        let commentsContainer = document.querySelector('.comment-list'); 
        for (let i = 0; i < 5; i++) { 
            let user = users[i];
            let comment = comments[i];
            let commentItem = document.createElement('li');
            commentItem.innerHTML = `
            <strong>${user.name} (${user.username})</strong><br>
            <em>${comment.body}</em><br>
            <small><a href="mailto:${user.email}">${user.email}</a></small>
        `;
            commentsContainer.appendChild(commentItem);
        }
    })
    .catch(err => console.error("Error fetching data:", err));

Promise.all([getUsers(), getComments()])
    .then(([users, comments]) => {
        let teaCommentsContainer = document.querySelector('.tea-comment-list');
        for (let i = 5; i < 11; i++) { 
            let user = users[i];
            let comment = comments[i];
            let commentItem = document.createElement('li');
            commentItem.innerHTML = `
            <strong>${user.name} (${user.username})</strong><br>
            <em>${comment.body}</em><br>
            <small><a href="mailto:${user.email}">${user.email}</a></small>
        `;
            teaCommentsContainer.appendChild(commentItem);
        }
    })
    .catch(err => console.error("Error fetching data:", err));
