document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message = document.getElementById('message');

    // 验证用户名
    let usernameRegex = /^[A-Za-z0-9]{1,16}$/;
    if (!usernameRegex.test(username)) {
        message.textContent = 'The username must be 1 to 16 letters and numbers.';
        return;
    }

    // 验证密码
    let passwordRegex = /^[A-Za-z0-9]{6,8}$/;
    if (!passwordRegex.test(password)) {
        message.textContent = 'The password must be 6 to 8 letters and numbers.';
        return;
    }

    // 验证确认密码
    if (password !== confirmPassword) {
        message.textContent = 'The password is different from the confirmation password.';
        return;
    }

    // 存储用户数据（使用本地存储模拟数据库）
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username)) {
        message.textContent = 'The user name already exists.';
        return;
    }

    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    message.textContent = 'Registered successfully! Going back to login page in 1 sec!';

    // 1000毫秒后跳转
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000); 

});
