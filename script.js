document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("userList");
    const loadUsersButton = document.getElementById("loadUsers");

    loadUsersButton.addEventListener("click", function () {
        fetchUsers(function (users) {
            displayUsers(users);
        });
    });

    function fetchUsers(callback) {
        fetch("http://localhost:3000/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Помилка: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('data', data);

                callback(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function displayUsers(users) {
        userList.innerHTML = "";
        users.forEach((user) => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
    }
});
