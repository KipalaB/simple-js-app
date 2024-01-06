let pokemonList = [
{ name : "Whimsicott", height : 0.7, type : ['Fairy','Grass'] },
{ name : "Slyveon", height : 1, type : 'Fairy' },
{ name : "Mimikyu", height : 0.2, type : ['Ghost', 'Fairy'] }
]

for (let i=0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " Height : " + pokemonList[i].height + "m")
    if (pokemonList[i].height <.3) {
        document.write(" - That's so tiny!")
    }
    if (pokemonList[i].name == 'Whimsicott') {
        document.write(" - The best pokemon.")
    }
}
