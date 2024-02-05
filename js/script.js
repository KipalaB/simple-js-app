let pokemonRepository = (function (){
    let pokemonList = [
        { name : "Whimsicott", height : 0.7, type : ['Fairy','Grass'] },
        { name : "Slyveon", height : 1, type : 'Fairy' },
        { name : "Mimikyu", height : 0.2, type : ['Ghost', 'Fairy'] }
        ]
        
        function add (pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll () {
            return pokemonList;
        }
        function addListItem(pokemon){
            let pkmnList = document.querySelector(".pokemon-list")
            let listItem = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            button.addEventListener('click', () => showDetails(pokemon));
            listItem.appendChild(button);
            pkmnList.appendChild(listItem);
        }
        function showDetails(pokemon){
            console.log(pokemon);
        }
        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
