document.getElementById('sendButton').addEventListener('click', function () {
    const modal = document.getElementById('successModal');
    modal.style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', function () {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
});
