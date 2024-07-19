document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('role-assignment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const role = document.getElementById('role').value;

        fetch('/admin/assign-role', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, roleName: role })
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
