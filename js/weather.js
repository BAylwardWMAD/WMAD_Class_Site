const apiKey = {
    key: '56a6725cd93e2c8d09bec051fc6a726b',
    base: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchBox.value);
    }
};

function getResults(query) {
    fetch(`${apiKey.base}weather?q=${query}&units=metric&appid=${apiKey.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
};

function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
}