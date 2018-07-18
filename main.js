console.log("Gotta Catch Em' All")

function release() {
  document.getElementById('bodytag').style.backgroundColor = "white";
}

function unclick() {
  document.getElementById('bodytag').style.backgroundColor = "";
}

function postPokemon1() {
  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      document.getElementById("showname").innerHTML = "";
      var pokename = document.createElement("h1");
      var pokename1 = document.getElementById('showname')
      pokename.textContent = pokeinfo.name;
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
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name +", "+  pokeinfo.abilities[1].ability.name +", "+ pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "https://pre00.deviantart.net/512f/th/pre/f/2016/092/d/9/019___rattata_by_pr0xis0ul-d9xhuae.png"
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", "https://raw.githubusercontent.com/itskarl/pokemon-pokedex/master/rattata", true);
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
      pokename.textContent = pokeinfo.name;
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
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name +", "+  pokeinfo.abilities[1].ability.name;
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
      pokename.textContent = pokeinfo.name;
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
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name +", "+  pokeinfo.abilities[1].ability.name +", "+ pokeinfo.abilities[2].ability.name;
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
      pokename.textContent = pokeinfo.name;
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
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name +", "+  pokeinfo.abilities[1].ability.name +", "+ pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "http://img00.deviantart.net/557f/i/2013/207/3/f/263_zigzagoon_by_pklucario-d6fcz9s.png"
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
      pokename.textContent = pokeinfo.name;
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
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name +", "+  pokeinfo.abilities[1].ability.name +", "+ pokeinfo.abilities[2].ability.name;
      pokeabilities1.appendChild(pokeabilities);

      document.getElementById("showimg").innerHTML = "";
      var pokeimg = document.createElement('img');
      var pokeimg1 = document.getElementById('showimg');
      // pokeimg.src = pokeinfo.sprites.front_default;
      pokeimg.src = "images/sentret.png"
      pokeimg1.appendChild(pokeimg);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/161", true);
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
      pokename.textContent = pokeinfo.name;
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
      pokeabilities.textContent = "ABILITIES: " + pokeinfo.abilities[0].ability.name +", "+  pokeinfo.abilities[1].ability.name +", "+ pokeinfo.abilities[2].ability.name;
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



var allPoke = [];

class trainerKarl {
  constructor(name) {
    this.name = name;
    this.all = function() {
      allPoke.push(this.name)
      console.log(allPoke);
    }
  }
}

class Pokemon extends trainerKarl {
  constructor(name) {
    super(name);
    this.name = name;
    this.health = 30;

    var newcall = new XMLHttpRequest();
    newcall.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var pokeinfo = JSON.parse(this.responseText);
      }
    }

    newcall.open("GET", "https://raw.githubusercontent.com/itskarl/pokemon-pokedex/master/rattata", true);
    newcall.send();
  }
}
