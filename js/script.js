/* fetch ('https://rickandmortyapi.com/api/character/?page=1')
.then(response => response.json())
.then(data => console.log(data)) */

// api para los personasjes de rick and morty: https://rickandmortyapi.com/

const characters = document.getElementById('character-list');

fetch('https://rickandmortyapi.com/api/character/?page=1')
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((data) => {
    data.results.forEach((character) => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
        characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}" />
        <h3>${character.name}</h3>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>`;
        characters.appendChild(characterCard);
    });
})
.catch((error) => {
    console.error('Error fetching data:', error);
});