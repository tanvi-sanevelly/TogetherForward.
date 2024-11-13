// JavaScript for Subscribe button
function subscribe() {
    const email = document.getElementById('email').value;
    const fullName = document.getElementById('fullName').value;
    const emailPermission = document.getElementById('emailPermission').checked;

    if (email === '' || fullName === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!emailPermission) {
        alert('Please agree to receive promotional emails.');
        return;
    }

    alert('You are officially subscribed');
}


