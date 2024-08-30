document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Ambil nilai dari formulir
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi sederhana (ganti dengan validasi backend yang sebenarnya)
    if (username === 'user1' && password === 'password123') {
        window.location.href = 'home.html'; // Redirect ke halaman home (ganti sesuai kebutuhan)
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});