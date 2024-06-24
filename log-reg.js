const track1 = document.querySelector('.slide_track_1');
const track2 = document.querySelector('.slide_track_2');

function cloneImages(track) {
    const images = Array.from(track.children);
    images.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
    });
}

cloneImages(track1);
cloneImages(track2);

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

document.getElementById('togglePassword').addEventListener('click',
    function () {
        const passwordInput = document.getElementById('password');
        const icon = this.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });

function validatePassword(password) {
    const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errorMessage = document.getElementById('errorMessage');

    document.getElementById('minLength').innerHTML =
        password.length >= 8 ?
            '<i class="fas fa-check text-success"></i> Minimum 8 characters' :
            '<i class="fas fa-times text-danger"></i> Minimum 8 characters';
    document.getElementById('uppercase').innerHTML =
        /[A-Z]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one uppercase letter' :
            '<i class="fas fa-times text-danger"></i> At least one uppercase letter';
    document.getElementById('lowercase').innerHTML =
        /[a-z]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one lowercase letter' :
            '<i class="fas fa-times text-danger"></i> At least one lowercase letter';
    document.getElementById('symbol').innerHTML =
        /[@$!%*?&]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one symbol (@$!%*?&)' :
            '<i class="fas fa-times text-danger"></i> At least one symbol (@$!%*?&)';

    if (strongPasswordRegex.test(password)) {
        errorMessage.textContent = 'Strong Password';
        errorMessage.classList.remove('text-danger');
        errorMessage.classList.add('text-success');
    } else {
        errorMessage.textContent = 'Weak Password';
        errorMessage.classList.remove('text-success');
        errorMessage.classList.add('text-danger');
    }
}