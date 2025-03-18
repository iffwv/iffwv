document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'تم تسجيل الدخول بنجاح!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
    }
});