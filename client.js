function sendCookiesToServer() {
    const cookies = document.cookie; // Собираем куки для текущего домена

    fetch('/api/store-cookies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cookies })
    })
    .then(response => response.json())
    .then(result => {
        console.log('Cookies sent successfully:', result);
    })
    .catch(error => {
        console.error('Error sending cookies:', error);
    });
}

// Отправляем куки на сервер при загрузке страницы
document.addEventListener('DOMContentLoaded', sendCookiesToServer);
