document.addEventListener("DOMContentLoaded",function (){
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-button");
    const name = document.getElementById("pokemon-name");
    const id = document.getElementById("pokemon-id");
    const frontSpriteNormal =  document.getElementById("sprite");
    const backSpriteNormal =   document.getElementById("normal-back-sprite");
    const frontSpriteShiny =  document.getElementById("front-sprite");
    const backSpriteShiny =   document.getElementById("back-sprite");
    const typesDiv =   document.getElementById("types");
    const leftBtn =document.getElementById("left-button");
    const rightBtn =document.getElementById("right-button");
    const pokedexEntry =   document.getElementById("pokedex-entry");
    const weight =  document.getElementById("weight");
    const height =   document.getElementById("height");
    const loadingSpinners = document.getElementsByClassName("loading-spinner");
    const stats = document.getElementById("stats");
    let maxID =1302;
  
  
  
  
    const getMaxPokemonId = async () => {
      try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
          const data = await response.json();
          const allPokemon = data.results;
          const maxId = allPokemon.length;
          return maxId;
      } catch (error) {
          console.error('Error fetching Pokémon data:', error);
      }
  };
  
    maxID = getMaxPokemonId();
  
    let currentPokemondata = {
      "height": 7,
      "id": 1,
      "name": "bulbasaur",
      "order": 1,
      "sprites": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
      },
      "stats": [
          {
              "base_stat": 45,
              "effort": 0,
              "stat": {
                  "name": "hp",
                  "url": "https://pokeapi.co/api/v2/stat/1/"
              }
          },
          {
              "base_stat": 49,
              "effort": 0,
              "stat": {
                  "name": "attack",
                  "url": "https://pokeapi.co/api/v2/stat/2/"
              }
          },
          {
              "base_stat": 49,
              "effort": 0,
              "stat": {
                  "name": "defense",
                  "url": "https://pokeapi.co/api/v2/stat/3/"
              }
          },
          {
              "base_stat": 65,
              "effort": 1,
              "stat": {
                  "name": "special-attack",
                  "url": "https://pokeapi.co/api/v2/stat/4/"
              }
          },
          {
              "base_stat": 65,
              "effort": 0,
              "stat": {
                  "name": "special-defense",
                  "url": "https://pokeapi.co/api/v2/stat/5/"
              }
          },
          {
              "base_stat": 45,
              "effort": 0,
              "stat": {
                  "name": "speed",
                  "url": "https://pokeapi.co/api/v2/stat/6/"
              }
          }
      ],
      "types": [
          {
              "slot": 1,
              "type": {
                  "name": "grass",
                  "url": "https://pokeapi.co/api/v2/type/12/"
              }
          },
          {
              "slot": 2,
              "type": {
                  "name": "poison",
                  "url": "https://pokeapi.co/api/v2/type/4/"
              }
          }
      ],
      "weight": 69
  };
  
  let currentPokemondata_V2 = {
      "base_happiness": 50,
      "capture_rate": 45,
      "color": {
          "name": "green",
          "url": "https://pokeapi.co/api/v2/pokemon-color/5/"
      },
      "egg_groups": [
          {
              "name": "monster",
              "url": "https://pokeapi.co/api/v2/egg-group/1/"
          },
          {
              "name": "plant",
              "url": "https://pokeapi.co/api/v2/egg-group/7/"
          }
      ],
      "evolution_chain": {
          "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
      },
      "evolves_from_species": null,
      "flavor_text_entries": [ 
          {
              "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
              "language": {
                  "name": "en",
                  "url": "https://pokeapi.co/api/v2/language/9/"
              },
              "version": {
                  "name": "red",
                  "url": "https://pokeapi.co/api/v2/version/1/"
              }
          }
  ]
  };
  
  const rotomPrank = () => {
      name.innerText = "MISSINGNO.";
      id.innerText = "#000";
      pokedexEntry.innerHTML = "A spectral anomaly from the digital void. MissingNo. warps reality, leaving chaos in its wake. Beware, for once it appears, it might never fully vanish.";
      typesDiv.innerHTML = `<p class="flying">BIRD</p><p class="normal">NORMAL</p>`;
      stats.style.setProperty('--before-background-image', 'url("https://th.bing.com/th/id/OIP.Yq2e0vPT3Cp7C_-M3WpYsgHaHa?w=500&h=500&rs=1&pid=ImgDetMain")');
      document.documentElement.style.setProperty('--bottom-screen-line', "orange");
      document.documentElement.style.setProperty('--bottom-screen-color', "yellow");
      const missingNoStats = [["hp",33],["attack",136],["defense",0],["speed",29],["special-defense",6],["special-attack",6]]	;
      missingNoStats.forEach((item) => {
          const statDiv = document.getElementById(item[0]);
          statDiv.innerHTML = item[1];
      });
  
      weight.innerText = "99";
      height.innerText = "10";
  
      frontSpriteNormal.src = "https://www.svgrepo.com/show/311991/cross-mark.svg";
      backSpriteNormal.src = "https://www.pokepedia.fr/images/8/8c/Artwork_TOKIYA_MissingNo_Fossile_Kabutops.png?20200627222026";
      frontSpriteShiny.src = "https://www.pokepedia.fr/images/e/e0/Artwork_TOKIYA_MissingNo_Fossile_Pt%C3%A9ra.png?20200627222024";
      backSpriteShiny.src = "https://www.svgrepo.com/show/298695/truck-deliver.svg";
  
      backSpriteNormal.style.display = "block";
      backSpriteShiny.style.display = "block";
      frontSpriteNormal.style.display = "block";
      frontSpriteShiny.style.display = "block";
  
      Array.from(loadingSpinners).forEach(spinner => {
          spinner.style.display = "none";
      });
  };
  
  const normalLoading = () => {
      name.innerText = "???";
      id.innerText = "#???";
      pokedexEntry.innerHTML = `Loading...`;
      typesDiv.innerHTML = `<p class="typeless">&nbsp;???&nbsp;</p>`;
  
      currentPokemondata.stats.forEach(item => {
          const statDiv = document.getElementById(item.stat.name);
          statDiv.innerText = "0";
      });
  
      weight.innerText = "???";
      height.innerText = "???";
  
      Array.from(loadingSpinners).forEach(spinner => {
          spinner.style.display = "block";
      });
      
  
      backSpriteNormal.style.display = "none";
      backSpriteShiny.style.display = "none";
      frontSpriteNormal.style.display = "none";
      frontSpriteShiny.style.display = "none";
  };
  
  const showLoading = () => {
      const error = /\d/.test(searchInput.value) && (searchInput.value < 1 || searchInput.value > maxID);
      if (Math.random() <= 0.01996 || error || searchInput.value === "") {
          rotomPrank();
      } else {
          normalLoading();
      }
      setTimeout(()=>{}, 5000);
  };
  
  const hideLoading = () => {
      Array.from(loadingSpinners).forEach(spinner => {
          spinner.style.display = "none";
      });
      stats.style.setProperty('--before-background-image', 'url("https://th.bing.com/th/id/OIP.UOWhG4Zvc5z1kE8fwPgFNQHaHa?rs=1&pid=ImgDetMain")');
      document.documentElement.style.setProperty('--bottom-screen-line', "#32CD32");
      document.documentElement.style.setProperty('--top-screen-color', "lightgreen");
      document.documentElement.style.setProperty('--top-screen-line', "green");
      document.documentElement.style.setProperty('--bottom-screen-color', "lightgreen");
  
      if (currentPokemondata.id >= 660) {
          backSpriteNormal.style.display = "none";
          backSpriteShiny.style.display = "none";
      } else {
          backSpriteNormal.style.display = "block";
          backSpriteShiny.style.display = "block";
      }
      frontSpriteNormal.style.display = "block";
      frontSpriteShiny.style.display = "block";
  };
  
  
  hideLoading();
  
  const getData = async () => {
      showLoading();
  
      try {
          const res = await fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" + searchInput.value.toLowerCase() + "/");
          currentPokemondata = await res.json();
      } catch (err) {
          console.log("pokeapi codecamp failed request", err ,searchInput.value.toLowerCase()  );
          alert("Pokémon not found");
          hideLoading();
          updatePage();
          return;
      }
  
      try {
          const res_2 = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + currentPokemondata.id);
          currentPokemondata_V2 = await res_2.json();
      } catch (err) {
          console.log("pokeapi v2 failed request", err);
          alert("Pokémon not found");
          hideLoading();
          updatePage();
          return;
      }
  
      hideLoading();
      updatePage();
      
  };
  
  const updatePage = () => {
          name.innerText = currentPokemondata.name;
          id.innerText = "#" + currentPokemondata.id;
          frontSpriteNormal.src = currentPokemondata.sprites.front_default;
          backSpriteNormal.src = currentPokemondata.sprites.back_default;
          frontSpriteShiny.src = currentPokemondata.sprites.front_shiny;
          backSpriteShiny.src = currentPokemondata.sprites.back_shiny;
          typesDiv.innerHTML = "";
          currentPokemondata.types.forEach((slot) => {
              typesDiv.innerHTML += `<p class="${slot.type.name}">${slot.type.name.toUpperCase()}</p>`;
          });
          const flavorTextEntry = currentPokemondata_V2.flavor_text_entries.find(entry => entry.language.name === "en");
          if (flavorTextEntry) {
              pokedexEntry.innerHTML = flavorTextEntry.flavor_text.replace(/\f/g,"");
          }
          weight.innerText = currentPokemondata.weight;
          height.innerText = currentPokemondata.height;
          currentPokemondata.stats.forEach((item) => {
              const statDiv = document.getElementById(item.stat.name);
              statDiv.innerText = item.base_stat;
          });
      };
  
  
      searchBtn.addEventListener("click", getData);
      leftBtn.addEventListener("click",function(){
          searchInput.value = currentPokemondata.id-1;
          searchBtn.click();
          searchInput.value = "";   
      });
  
      rightBtn.addEventListener("click",function(){
          searchInput.value = currentPokemondata.id+1;
          searchBtn.click();
          searchInput.value = "";
      });
  
      document.addEventListener("keydown", function(event){
          if(event.key === "Enter"){
            searchBtn.click(); 
            searchInput.value = "";  
          }
          if (event.key === "ArrowLeft") {
              leftBtn.click();
          }
          if (event.key === "ArrowRight") {
              rightBtn.click();
          }
          
      })
  
  
  });