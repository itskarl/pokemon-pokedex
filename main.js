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
  content.classList.add('bounceInRight')

  setTimeout(function() {

    content = document.getElementById('showimg');
    content.classList.remove('animated');
    content.classList.remove('bounceInRight');

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
      document.getElementById("showimg").src = "images/"+name+".png"
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
    for (var i =0; i < allPokemon.length; i++)
     if (allPokemon[i].name === name) {
        console.log(allPokemon[i])
     }
},
}


//

var element = document.getElementById('showname');
var text = element.innerText || element.textContent;
element.innerHTML = text;
