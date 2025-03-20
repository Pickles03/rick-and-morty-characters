/* fetch ('https://rickandmortyapi.com/api/character/?page=1') <- reference endpoint page
.then(response => response.json())
.then(data => console.log(data)) */

// api para los personasjes de rick and morty: https://rickandmortyapi.com/

/*const characters = document.getElementById('character-list');

fetch('https://rickandmortyapi.com/api/character/?page=1') //it's a public api, so we can use it, json is the format of the data
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
});*/

//when we fetch from a public api, we are usually working with 2 servers, the one that we are working on and the one that we are fetching from, so we need to check if the response is ok, if it's not, we throw an error, and we catch it with the catch method, and we can console log the error, or do something else with it.


//class solution
//1 . fetch to get the data
//2 . add it to the web -> character-list is an UL so I need to create LI elements (li)
//3. pagination -> create a button for each page (capture the buttons and add an event listener to each one of them) #prev-page and #next-page
//4. think of how to add +1 and -1 to the page number




const characterList = document.getElementById('character-list');
const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');

let currentPage = 1;


function getCharacters() {
fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
.then(response => {
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }
    return response.json()
})
.then(data => {
    characterList.innerHTML = ''
    const characters = data.results
    characters.forEach(character => {
        characterList.innerHTML += template(character.name, character.image, character.species);
    });
})
.catch(error => console.error(error.message)); //this catches the error if the response is not ok and console logs it to the console
};

getCharacters();

nextPage.addEventListener('click', () => {
    if (currentPage < 42) {
        currentPage++;
        getCharacters();
        console.log(currentPage);
    }
});

prevPage.addEventListener('click', () => {
    if (currentPage !== 1) {
        currentPage--;
        getCharacters();
        console.log(currentPage);
    }
});

function template(name, image, species) {
    return `
    <li>
        <div class='character-card'>
            <img src=${image} alt="${name}" />
            <h2><strong>Name:</strong>${name}</h2>
            <p><strong>Species:</strong>${species}</p>
        </div>
    </li>`

}
