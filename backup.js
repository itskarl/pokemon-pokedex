console.log("Gotta Catch Em' All!!!")

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
    apiLink: "https://pokeapi.co/api/v2/pokemon/659.json"
  },
  rattata: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/19.json"
  },
  bidoof: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/399.json"
  },
  zigzagoon: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/263.json"
  },
  patrat: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/504.json"
  },
  zubat: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/41.json"
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

  let apiLink = "https://pokeapi.co/api/v2/pokemon/" + idNumber;

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

let pokeRequest = pokename.value.toLowerCase();


function masterRelease() {

  // this sets input from input "pokename" to pokeRequest
  let pokeRequest = pokename.value.toLowerCase();
  masterPokemon(pokeRequest);

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = pokeinfo.name.toUpperCase();
      document.getElementById("showhp").innerHTML = " HP: " + pokeinfo.stats[5].base_stat;
      document.getElementById("showatk").innerHTML = " ATTACK: " + pokeinfo.stats[4].base_stat;
      document.getElementById("showabilities").innerHTML = "ABILITY: " + pokeinfo.abilities[0].ability.name;


      var pokename = document.createElement("p");
      var pokename1 = document.getElementById('pokelist')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);

      var pokename = document.createElement("p");
      var pokename1 = document.getElementById('pokelist')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);


      Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {
          s = "0" + s;
        }
        return s;
      }
      //

      if (isNaN(pokename.value))
      {
        for (var i = 0; i < masterList.length; i++)
          if (masterList[i].name === pokeRequest)
        document.getElementById("showimg").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + masterList[i].id.pad(3) + ".png"
      } else      {

            document.getElementById("showimg").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokeRequest + ".png"
      }


    }
  }


  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokeRequest, true);
  newcall.send();

}


function clearPoke() {
  document.getElementById("pokelist").innerHTML = "";
}
