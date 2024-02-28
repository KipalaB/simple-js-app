let pokemonRepository = (function (){
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1025';
        
        function add(pokemon) {
            if(
                typeof pokemon === "object" &&
                "name" in pokemon
                ){
                pokemonList.push(pokemon);
                } else {
                    console.log("pokemon is not correct");
                }
            }

        function getAll () {
            return pokemonList;
        }

        let modal = document.querySelector('.modal');

        function addListItem(pokemon){
            let pkmnList = document.querySelector(".list-group")
            let listItem = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("btn");
            button.classList.add("btn-primary");
            button.addEventListener('click', () => showDetails(pokemon));
            listItem.classList.add(".list-group-item");
            listItem.appendChild(button);
            pkmnList.appendChild(listItem);
        }

        function loadList() {
            return fetch(apiUrl).then(function (response) {
              return response.json();
            }).then(function (json) {
              json.results.forEach(function (item) {
                let pokemon = {
                  name: item.name,
                  detailsUrl: item.url
                };
                add(pokemon);
              });
            }).catch(function (e) {
              console.error(e);
            })
          }

        function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (details) {
              // Now we add the details to the item
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.types = details.types;
            }).catch(function (e) {
              console.error(e);
            });
        }

        function showDetails(pokemon) {
            loadDetails(pokemon).then(function () {
              showModal(pokemon.name, pokemon.height + "0 cm", pokemon.imageUrl);
            });
        }

        function showModal(title, text, img) {
            let modalBody = document.querySelector('.modal-body');
            let modalHeader = document.querySelector('.modal-header');
            let modalFooter = document.querySelector('.modal-footer');
          
            // Clear all existing modal content
            modalBody.innerHTML = '';
          
            let modalTitle = document.querySelector('.modal-title');
            modalTitle.innerHTML = title

            let closeButtonElement = document.querySelector('#close');
            closeButtonElement.addEventListener('click', hideModal);
          
            // Add the new modal content
          
            let imageFront = document.createElement('img');
            imageFront.classList.add('modal-img');
            imageFront.src = img;
            imageFront.alt = 'Front image of ' + title;

            let heightElement = document.createElement('p');
            heightElement.innerHTML = text;


            modalHeader.appendChild(modalTitle);
            modalFooter.appendChild(closeButtonElement);
            modalBody.appendChild(imageFront);
            modalBody.appendChild(heightElement);
            
            modal.classList.add('is-visible');
            modal.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modal) {
    hideModal();
  }
});
         }

        function hideModal() {
          modal.classList.remove('is-visible');
        }

        window.addEventListener('keydown', (e) => {
          let modal = document.querySelector('.modal');
          if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
            hideModal();  
          }
        });

        
          

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails,
            showModal: showModal,
            hideModal: hideModal
        };
    })();



pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

