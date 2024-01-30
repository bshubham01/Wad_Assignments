document.addEventListener('DOMContentLoaded', function () {
    const userArray = JSON.parse(localStorage.getItem('userArray')) || [];
    const userListElement = document.getElementById('userList');
    
    userArray.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
        userListElement.appendChild(listItem);
    });
});
