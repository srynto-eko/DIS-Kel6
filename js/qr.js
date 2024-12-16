const qrCodeSection = document.getElementById('qrCodeSection');
const toggleButton = document.getElementById('toggleQrCode');

toggleButton.addEventListener('click', () => {
    if (qrCodeSection.style.display === 'none') {
        qrCodeSection.style.display = 'block';
        toggleButton.textContent = 'Hide QR Code';
    } else {
        qrCodeSection.style.display = 'none';
        toggleButton.textContent = 'Show QR Code';
    }
});
