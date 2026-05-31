const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
});

const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const myModal = document.getElementById('myModal');

openModalBtn.addEventListener('click', function() {
    myModal.classList.add('active');
});

closeModalBtn.addEventListener('click', function() {
    myModal.classList.remove('active');
});

const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
        const imgName = thumb.getAttribute('data-src');
        mainImage.style.backgroundImage = "url('" + imgName + "')";
        mainImage.style.backgroundSize = "cover";
        mainImage.style.backgroundPosition = "center";
        mainImage.textContent = "";
    });
});

const feedbackForm = document.getElementById('feedbackForm');
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');
const successMessage = document.getElementById('successMessage');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (usernameInput.value.trim() === '') {
        usernameError.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        usernameError.style.display = 'none';
        successMessage.style.display = 'block';
        usernameInput.value = '';
    }
});

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});