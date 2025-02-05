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

function renderStadiums(stadiums) {
    filteredStadiums = stadiums;
    const StadiumList = document.getElementById('stadiums__content');
    StadiumList.innerHTML = '';

    let totallux = 0;

    stadiums.forEach(Stadium => {
        const StadiumItem = document.createElement('div');
        StadiumItem.classList.add('stadium-item');
        StadiumItem.innerHTML = `
                    <img src="${Stadium.image}" ${Stadium.name}" width="200">
                    <p>Назва: ${Stadium.name}</p>
                    <p>К-сть глядачів: ${Stadium.viewers}</p>
                    <p>Потужність освітлення: ${Stadium.lux}</p>
                `;
        StadiumList.appendChild(StadiumItem);

    totallux += Stadium.lux;
});

document.getElementById('totallux').textContent = totallux.toFixed(2);

}


function sortByAlphabet() {
    const sortedStadiums = [...filteredStadiums].sort((a, b) => a.name.localeCompare(b.name));
    renderStadiums(sortedStadiums);
}
 
function sortByViewers() {
    const sortedStadiums = [...filteredStadiums].sort((a, b) => b.viewers - a.viewers);
    renderStadiums(sortedStadiums);
}

function sortByLux() {
    const sortedStadiums = [...filteredStadiums].sort((a, b) => b.lux - a.lux);
    renderStadiums(sortedStadiums);
}

function searchStadiumByName() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredStadiums = StadiumData.filter(Stadium => Stadium.name.toLowerCase().includes(searchInput));
    renderStadiums(filteredStadiums);
}

renderStadiums(filteredStadiums);
