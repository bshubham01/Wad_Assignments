function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const user = { username, email };
    saveToLocalStorage(user);
    window.location.href = 'datalist.html';
}

function saveToLocalStorage(userData) {
    const existingData = JSON.parse(localStorage.getItem('userArray')) || [];
    existingData.push(userData);
    localStorage.setItem('userArray', JSON.stringify(existingData));
}
