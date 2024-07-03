document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const userContainer = document.getElementById('user');
    const clearButton = document.getElementById('clear__button');
    
    
    async function fetchUsers() {
        const response = await fetch('https://randomuser.me/api/?results=9');
        const data = await response.json();
        displayUsers(data.results);
    }
    function displayUsers(users) {
        userContainer.innerHTML = '';
        users.forEach(user => {
        const userElement = document.createElement('li');
        userElement.classList.add('user__item');
        userElement.innerHTML = `
            <button class="user__delete--btn">
                <i class="fas fa-trash"></i>
            </button>
            <img class="user__img" alt="User photo" src="${user.picture.large}" width="100" height="100" />
            <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- ${user.name.title} ${user.name.first} ${user.name.last}</span>
            </div>
            <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${user.dob.age} years old.</span>
            </div>
            <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>- ${user.location.city}, ${user.location.country}</span>
            </div>
            <div class="user__gender">
                <span class="material-symbols-outlined">${user.gender === 'male' ? 'man' : 'woman'}</span>
                <span>- ${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</span>
            </div>
        `;
        userElement.querySelector('.user__delete--btn').addEventListener('click', () => {
            userElement.remove();
        });
        userContainer.appendChild(userElement);
        });
    }
    clearButton.addEventListener('click', (e) => {
        e.preventDefault();
        userContainer.innerHTML = '';
        clearButton.classList.add('hidden')
    });
    fetchUsers();
    });
document.addEventListener('DOMContentLoaded', () => {
        const userContainer = document.getElementById('user');
        const searchInput = document.getElementById('form__input');
        async function fetchUsers() {
            try {
                const data = await response.json();
                displayUsers(data.results);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        function displayUsers(users) {
            userContainer.innerHTML = '';
            users.forEach((user, index) => {
                const userItem = document.createElement('li');
                userItem.classList.add('user__item');0
                userItem.innerHTML = `
                <button id="delete__btn" class="user__delete--btn c${index + 1}">
                    <i class="fas fa-trash"></i>
                </button>
                <img class="user__img" alt="User photo" src="${user.picture.large}" width="100" height="100"/>
                <div class="user__name">
                    <span class="material-symbols-outlined">badge</span>
                    <span>- ${user.name.title} ${user.name.first} ${user.name.last}</span>
                </div>
                <div class="user__year">
                    <span class="material-symbols-outlined">cake</span>
                    <span>- ${user.dob.age} years old.</span>
                </div>
                <div class="user__location">
                    <span class="material-symbols-outlined">person_pin_circle</span>
                    <span>- ${user.location.city}, ${user.location.country}</span>
                </div>
                `;
                userContainer.appendChild(userItem);
            })}
        function filterUsers(event) {
            const searchQuery = event.target.value.toLowerCase();
            const userItems = document.querySelectorAll('.user__item');
            userItems.forEach(item => {
                const userName = item.querySelector('.user__name').innerText.toLowerCase();
                const userLocation = item.querySelector('.user__location').innerText.toLowerCase();
                if (userName.includes(searchQuery) || userLocation.includes(searchQuery)) {
                item.style.display = 'block';
                } else {
                item.style.display = 'none';
                }
            });}
        searchInput.addEventListener('input', filterUsers);
        fetchUsers()});