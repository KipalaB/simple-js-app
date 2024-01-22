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

        return {
            add: add,
            getAll: getAll
        };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<p>" + pokemon.name + " || Height : " + pokemon.height + "m" + "</p>")
    if (pokemon.name == 'Whimsicott'){
        document.write(' - The best pokemon.')
    }
});