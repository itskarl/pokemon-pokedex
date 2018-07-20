console.log("Gotta Catch Em' All")

function click() {
  document.getElementById('bodytag').style.backgroundColor = "white";
}

function unclick() {
  document.getElementById('bodytag').style.backgroundColor = "";
}

function revealContent() {
  content = document.getElementById('showimg');

  content.classList.remove('hidden');
  content.classList.add('reveal');
  content.classList.add('animated');
  content.classList.add('tada');

  setTimeout(function() {

    content2 = document.getElementById('showimg');
    content2.classList.remove('reveal');
    content2.classList.remove('animated');
    content2.classList.remove('tada');
  }, 2000);

}

function postPokemon() {
var pokemonName = myPokemon[name];

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = "";
      var pokename = document.createElement("h1");
      var pokename1 = document.getElementById('showname')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);

      document.getElementById("showhp").innerHTML = "";
      var pokehp = document.createElement('h3');
      var pokehp1 = document.getElementById('showhp');
      pokehp.textContent = " HP: " + pokeinfo.stats[5].base_stat;
      pokehp1.appendChild(pokehp);

      document.getElementById("showatk").innerHTML = "";
      var pokeatk = document.createElement('h3');
      var pokeatk1 = document.getElementById('showatk');
      pokeatk.textContent = " ATTACK: " + pokeinfo.stats[4].base_stat;
      pokeatk1.appendChild(pokeatk);

      document.getElementById("showabilities").innerHTML = "";
      var pokeabilities = document.createElement('h3');
      var pokeabilities1 = document.getElementById('showabilities');
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name + ", " + pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "images/"+pokeName+".png";
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", pokemonName.apiLink, true);
  newcall.send();
}

function postPokemon2() {
  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = "";
      var pokename = document.createElement("h1");
      var pokename1 = document.getElementById('showname')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);

      document.getElementById("showhp").innerHTML = "";
      var pokehp = document.createElement('h3');
      var pokehp1 = document.getElementById('showhp');
      pokehp.textContent = " HP: " + pokeinfo.stats[5].base_stat;
      pokehp1.appendChild(pokehp);

      document.getElementById("showatk").innerHTML = "";
      var pokeatk = document.createElement('h3');
      var pokeatk1 = document.getElementById('showatk');
      pokeatk.textContent = " ATTACK: " + pokeinfo.stats[4].base_stat;
      pokeatk1.appendChild(pokeatk);

      document.getElementById("showabilities").innerHTML = "";
      var pokeabilities = document.createElement('h3');
      var pokeabilities1 = document.getElementById('showabilities');
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "images/zubat.png"
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/41", true);
  newcall.send();
}


function postPokemon3() {
  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = "";
      var pokename = document.createElement("h1");
      var pokename1 = document.getElementById('showname')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);

      document.getElementById("showhp").innerHTML = "";
      var pokehp = document.createElement('h3');
      var pokehp1 = document.getElementById('showhp');
      pokehp.textContent = " HP: " + pokeinfo.stats[5].base_stat;
      pokehp1.appendChild(pokehp);

      document.getElementById("showatk").innerHTML = "";
      var pokeatk = document.createElement('h3');
      var pokeatk1 = document.getElementById('showatk');
      pokeatk.textContent = " ATTACK: " + pokeinfo.stats[4].base_stat;
      pokeatk1.appendChild(pokeatk);

      document.getElementById("showabilities").innerHTML = "";
      var pokeabilities = document.createElement('h3');
      var pokeabilities1 = document.getElementById('showabilities');
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name + ", " + pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "images/bidoof.png"
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/399", true);
  newcall.send();
}


function postPokemon4() {
  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = "";
      var pokename = document.createElement("h1");
      var pokename1 = document.getElementById('showname')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);

      document.getElementById("showhp").innerHTML = "";
      var pokehp = document.createElement('h3');
      var pokehp1 = document.getElementById('showhp');
      pokehp.textContent = " HP: " + pokeinfo.stats[5].base_stat;
      pokehp1.appendChild(pokehp);

      document.getElementById("showatk").innerHTML = "";
      var pokeatk = document.createElement('h3');
      var pokeatk1 = document.getElementById('showatk');
      pokeatk.textContent = " ATTACK: " + pokeinfo.stats[4].base_stat;
      pokeatk1.appendChild(pokeatk);

      document.getElementById("showabilities").innerHTML = "";
      var pokeabilities = document.createElement('h3');
      var pokeabilities1 = document.getElementById('showabilities');
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name + ", " + pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "images/zigzagoon.png"
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/263", true);
  newcall.send();
}


function postPokemon5() {
  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = "";
      var pokename = document.createElement("h1");
      var pokename1 = document.getElementById('showname')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);

      document.getElementById("showhp").innerHTML = "";
      var pokehp = document.createElement('h3');
      var pokehp1 = document.getElementById('showhp');
      pokehp.textContent = " HP: " + pokeinfo.stats[5].base_stat;
      pokehp1.appendChild(pokehp);

      document.getElementById("showatk").innerHTML = "";
      var pokeatk = document.createElement('h3');
      var pokeatk1 = document.getElementById('showatk');
      pokeatk.textContent = " ATTACK: " + pokeinfo.stats[4].base_stat;
      pokeatk1.appendChild(pokeatk);

      document.getElementById("showabilities").innerHTML = "";
      var pokeabilities = document.createElement('h3');
      var pokeabilities1 = document.getElementById('showabilities');
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name + ", " + pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "images/patrat.png"
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/504", true);
  newcall.send();
}

function postPokemon6() {
  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = "";
      var pokename = document.createElement("h1");
      var pokename1 = document.getElementById('showname')
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokename1.appendChild(pokename);

      document.getElementById("showhp").innerHTML = "";
      var pokehp = document.createElement('h3');
      var pokehp1 = document.getElementById('showhp');
      pokehp.textContent = " HP: " + pokeinfo.stats[5].base_stat;
      pokehp1.appendChild(pokehp);

      document.getElementById("showatk").innerHTML = "";
      var pokeatk = document.createElement('h3');
      var pokeatk1 = document.getElementById('showatk');
      pokeatk.textContent = " ATTACK: " + pokeinfo.stats[4].base_stat;
      pokeatk1.appendChild(pokeatk);

      document.getElementById("showabilities").innerHTML = "";
      var pokeabilities = document.createElement('h3');
      var pokeabilities1 = document.getElementById('showabilities');
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name + ", " + pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "images/bunnelby.png"
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/659", true);
  newcall.send();
}


// NOW WITH OBJECTS!!
// NOW WITH OBJECTS!!
// NOW WITH OBJECTS!!


allPokemon = [];
totalPokemon = 0;

myPokemon = {
  rattata: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/41"
  },
  bunnelby: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/659"
  },
  bidoof: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/399"
  },
  zigzagoon: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/263"
  },
  patrat: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/504"
  },
  zubat: {
    apiLink: "https://pokeapi.co/api/v2/pokemon/659"
  },
}


function createPokemon(name) {
  var pokemonName = myPokemon.name;

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      //these lines push to allPokemon
      let Pokemon = {
        name: pokeinfo.name.toUpperCase(),
        hp: pokeinfo.stats[5].base_stat,
        attack: pokeinfo.stats[4].base_stat,
        abilities: [pokeinfo.abilities[0].ability.name, pokeinfo.abilities[1].ability.name, pokeinfo.abilities[2].ability.name]
      }
      totalPokemon++;
      allPokemon.push(Pokemon);
    }
  }
  newcall.open("GET", pokemonName.apiLink, true);
  newcall.send();
}
createPokemon('rattata');
createPokemon('bunnelby');
createPokemon('zigzagoon');
createPokemon('patrat');
createPokemon('zubat');
createPokemon('bidoof');

// AND HERE IS THE TRAINER!
// AND HERE IS THE TRAINER!


trainerKarl = {
  name: "Karl Ketchum",
  Pokemon: allPokemon,
  all: function() {
    console.log(allPokemon)
  },
  // get: function(name) {
  //   console.log(trainerKarl.allPokemon[name])
  // },
}
