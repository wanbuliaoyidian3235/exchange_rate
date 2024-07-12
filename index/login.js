document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message');

    // 从本地存储中获取用户数据
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // 验证用户名和密码
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        message.textContent = '登录成功！';
        // 在此处可以跳转到其他页面或执行其他操作
    } else {
        message.textContent = '用户名或密码错误。';
    }
});
