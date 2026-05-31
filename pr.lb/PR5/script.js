document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phone = document.getElementById('phone');
    const birthdate = document.getElementById('birthdate');
    const agree = document.getElementById('agree');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const phoneError = document.getElementById('phoneError');
    const birthdateError = document.getElementById('birthdateError');
    const agreeError = document.getElementById('agreeError');
    const successMessage = document.getElementById('successMessage');

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    phoneError.textContent = '';
    birthdateError.textContent = '';
    agreeError.textContent = '';
    successMessage.style.display = 'none';

    if (username.value.trim() === '') {
        usernameError.textContent = "Ім'я користувача обов'язкове";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Введіть коректний формат email';
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        passwordError.textContent = 'Мінімум 8 символів, цифра та велика літера';
        isValid = false;
    }

    if (password.value !== confirmPassword.value || confirmPassword.value === '') {
        confirmPasswordError.textContent = 'Паролі не співпадають';
        isValid = false;
    }

    const phoneRegex = /^\+?3?8?0\d{9}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = 'Формат телефону має бути +380XXXXXXXXX';
        isValid = false;
    }

    if (birthdate.value === '') {
        birthdateError.textContent = 'Вкажіть дату народження';
        isValid = false;
    } else {
        const today = new Date();
        const birth = new Date(birthdate.value);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        if (age < 18) {
            birthdateError.textContent = 'Доступно тільки для осіб від 18 років';
            isValid = false;
        }
    }

    if (!agree.checked) {
        agreeError.textContent = 'Необхідно погодитися з умовами';
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = 'block';
        document.getElementById('registrationForm').reset();
    }
});