class Stadium {
    constructor(name, viewers, lux, image) {
        this.name = name;
        this.viewers = viewers;
        this.lux = lux;
        this.image = image;
    }
}

const StadiumData = [
    new Stadium('Камп Ноу', 99000, 1780, './img/photo1.jpg'),
    new Stadium('Вемблі', 90000, 1540, './img/photo2.jpg'),
    new Stadium('Маракана', 78000, 1950, './img/photo3.jpg'),
];

let filteredStadiums = StadiumData;
let editingStadiumIndex = null;

function renderStadiums(stadiums) {
    filteredStadiums = stadiums;
    const StadiumList = document.getElementById('stadiums__content');
    StadiumList.innerHTML = '';

    let totalLux = 0;

    stadiums.forEach((stadium, index) => {
        const StadiumItem = document.createElement('div');
        StadiumItem.classList.add('stadium-item');
        StadiumItem.innerHTML = `
            <img src="${stadium.image}" alt="${stadium.name}" width="200">
            <p>Назва: ${stadium.name}</p>
            <p>К-сть глядачів: ${stadium.viewers}</p>
            <p>Потужність освітлення: ${stadium.lux}</p>
            <button onclick="editStadium(${index})">Редагувати</button>
        `;
        StadiumList.appendChild(StadiumItem);

        totalLux += stadium.lux;
    });

    document.getElementById('totalLux').textContent = totalLux.toFixed(2);
}

function sortByAlphabet() {
    const sortedStadiums = [...filteredStadiums].sort((a, b) => a.name.localeCompare(b.name));
    renderStadiums(sortedStadiums);
}

function sortByviewers() {
    const sortedStadiums = [...filteredStadiums].sort((a, b) => b.viewers - a.viewers);
    renderStadiums(sortedStadiums);
}

function sortBylux() {
    const sortedStadiums = [...filteredStadiums].sort((a, b) => b.lux - a.lux);
    renderStadiums(sortedStadiums);
}

function searchStadiumByName() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().replace(/\s+/g, '');
    const filteredStadiums = StadiumData.filter(stadium => 
        stadium.name.toLowerCase().replace(/\s+/g, '').includes(searchInput)
    );
    renderStadiums(filteredStadiums);
}

function showCreateForm() {
    document.getElementById('formTitle').textContent = 'Створити Стадіон';
    document.getElementById('stadiumForm').reset();
    editingStadiumIndex = null;
    document.getElementById('stadiumModal').style.display = 'block';
}

function editStadium(index) {
    const stadium = StadiumData[index];
    document.getElementById('formTitle').textContent = 'Відредагувати Стадіон';
    document.getElementById('stadiumName').value = stadium.name;
    document.getElementById('stadiumViewers').value = stadium.viewers;
    document.getElementById('stadiumLux').value = stadium.lux;
    document.getElementById('stadiumImage').value = stadium.image;
    editingStadiumIndex = index;
    document.getElementById('stadiumModal').style.display = 'block';
}
    
function saveStadium(event) {
    event.preventDefault();
    
    const name = document.getElementById('stadiumName').value;
    const viewers = parseFloat(document.getElementById('stadiumViewers').value);
    const lux = parseFloat(document.getElementById('stadiumLux').value);
    const image = document.getElementById('stadiumImage').value;

    if (!name || isNaN(viewers) || viewers <= 0 || isNaN(lux) || lux <= 0 || !image) {
        alert('Будь-ласка заповніть таблицю валідними даними');
        return;
    }

    const stadiumExists = StadiumData.some((stadium, index) =>
        stadium.name.toLowerCase() === name.toLowerCase() && index !== editingStadiumIndex
    );

    if (stadiumExists) {
        alert('Стадіон з таким іменем вже існує в таблиці');
        return;
    }

    const newStadium = new Stadium(name, viewers, lux, image);

    if (editingStadiumIndex !== null) {
        StadiumData[editingStadiumIndex] = newStadium;
    } else {
        StadiumData.push(newStadium);
    }

    hideStadiumForm();
    renderStadiums(StadiumData);
}

function hideStadiumForm() {
    document.getElementById('stadiumModal').style.display = 'none';
}

// Initial render
renderStadiums(filteredStadiums);
