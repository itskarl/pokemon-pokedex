console.log("Gotta Catch Em' All")

// function click() {
//   document.getElementById('bodytag').style.backgroundColor = "white";
// }
//
// function unclick() {
//   document.getElementById('bodytag').style.backgroundColor = "";
// }

function revealContent() {
  content = document.getElementById('showimg');

  content.classList.remove('hidden');
  content.classList.add('animated');
  content.classList.add('zoomInDown')

  setTimeout(function() {

    content = document.getElementById('showimg');
    content.classList.remove('animated');
    content.classList.remove('zoomInDown');

  }, 1000);

}

function postPokemon(name) {

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);
      document.getElementById("showname").innerHTML = pokeinfo.name.toUpperCase();
      document.getElementById("showhp").innerHTML = " HP: " + pokeinfo.stats[5].base_stat;
      document.getElementById("showatk").innerHTML = " ATTACK: " + pokeinfo.stats[4].base_stat;
      document.getElementById("showabilities").innerHTML = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name;
      document.getElementById("showimg").src = "images/" + name + ".png"
    }
  }
  newcall.open("GET", myPokemon[name].apiLink, true);
  newcall.send();
}

// NOW WITH OBJECTS!!
allPokemon = [];
totalPokemon = 0;

myPokemon = {
  bunnelby: {
    apiLink: "https://pokeapi-nycda.firebaseio.com/pokemon/659.json"
  },
  rattata: {
    apiLink: "https://pokeapi-nycda.firebaseio.com/pokemon/19.json"
  },
  bidoof: {
    apiLink: "https://pokeapi-nycda.firebaseio.com/pokemon/399.json"
  },
  zigzagoon: {
    apiLink: "https://pokeapi-nycda.firebaseio.com/pokemon/263.json"
  },
  patrat: {
    apiLink: "https://pokeapi-nycda.firebaseio.com/pokemon/504.json"
  },
  zubat: {
    apiLink: "https://pokeapi-nycda.firebaseio.com/pokemon/41.json"
  },
}




function createPokemon(name) {

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      //these lines push to allPokemon
      let Pokemon = {
        name: pokeinfo.name,
        hp: pokeinfo.stats[5].base_stat,
        attack: pokeinfo.stats[4].base_stat,
        abilities: [pokeinfo.abilities[0].ability.name, pokeinfo.abilities[1].ability.name]
      }
      totalPokemon++;
      allPokemon.push(Pokemon);
    }
  }
  newcall.open("GET", myPokemon[name].apiLink, true);
  newcall.send();
}

createPokemon('bunnelby');
createPokemon('zigzagoon');
createPokemon('patrat');
createPokemon('zubat');
createPokemon('bidoof');
createPokemon('rattata')

// AND HERE IS THE TRAINER!

trainerKarl = {
  name: "Karl Ketchum",
  Pokemon: allPokemon,
  all: function() {
    console.log(allPokemon)
  },
  get: function(name) {
    for (var i = 0; i < allPokemon.length; i++)
      if (allPokemon[i].name === name) {
        console.log(allPokemon[i])
      }
  },
}

//experimental stuff begins here
//experimental stuff begins here
//experimental stuff begins here


//CREATING A masterList
//this creates a pull from all the API numbers

masterList = []

function masterPokemon(idNumber) {

  let apiLink = "https://pokeapi-nycda.firebaseio.com/pokemon/" + idNumber + ".json";

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      let Pokemon = {
        name: pokeinfo.name,
        hp: pokeinfo.stats[5].base_stat,
        attack: pokeinfo.stats[4].base_stat,
        ability: pokeinfo.abilities[0].ability.name,
        id: pokeinfo.id,
      }
      masterList.push(Pokemon);
    }
  }
  newcall.open("GET", apiLink, true);
  newcall.send();
}

//this pulls ALL the POKEMON

var catchEmAll = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            for (var masterIndex = 1; masterIndex <= 802; masterIndex++) {
              masterPokemon(masterIndex)
            };

              alert("Loading full Pokedex! This may take a minute or two. Once loaded, you can request any pokemon here.");
        }
    };
})();

//



function masterRelease() {

  // this sets input to pokeRequest
  let pokeRequest = pokename.value.toLowerCase();

  for (var i = 0; i < masterList.length; i++)
    if (masterList[i].name === pokeRequest) {
      var newcall = new XMLHttpRequest();
      newcall.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var pokeinfo = JSON.parse(this.responseText);

          document.getElementById("showname").innerHTML = pokeinfo.name.toUpperCase();
          document.getElementById("showhp").innerHTML = " HP: " + pokeinfo.stats[5].base_stat;
          document.getElementById("showatk").innerHTML = " ATTACK: " + pokeinfo.stats[4].base_stat;
          document.getElementById("showabilities").innerHTML = "ABILITY: " + pokeinfo.abilities[0].ability.name;

          //code to pull picture from official pokemon site
          // found this js online to make id number always 3 digits
          Number.prototype.pad = function(size) {
            var s = String(this);
            while (s.length < (size || 2)) {
              s = "0" + s;
            }
            return s;
          }
          //

          for (var i = 0; i < masterList.length; i++)
            if (masterList[i].name === pokeRequest)
              document.getElementById("showimg").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + masterList[i].id.pad(3) + ".png"

          //wow pulling that image was hard

        }
      }
    }
  for (var i = 0; i < masterList.length; i++)
    if (masterList[i].name === pokeRequest) {
      newcall.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/" + masterList[i].id + ".json", true);
      newcall.send();
    }
}
