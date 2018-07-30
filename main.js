console.log("Gotta Catch Em' All!!!")


setTimeout(function() {
  document.getElementById('oakbox').classList.remove('hidden');
  document.getElementById('oakbox').classList.add('animated');
  document.getElementById('oakbox').classList.add('slideInDown')
}, 650);

//
//
// function postPokemon(name) {
//
//   var newcall = new XMLHttpRequest();
//   newcall.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var pokeinfo = JSON.parse(this.responseText);
//       document.getElementById("showname").innerHTML = pokeinfo.name.toUpperCase();
//       document.getElementById("showhp").innerHTML = " HP: " + pokeinfo.stats[5].base_stat;
//       document.getElementById("showatk").innerHTML = " ATTACK: " + pokeinfo.stats[4].base_stat;
//       document.getElementById("showabilities").innerHTML = "ABILITIES: " + pokeinfo.abilities[0].ability.name + ", " + pokeinfo.abilities[1].ability.name;
//       document.getElementById("showimg").src = "images/" + name + ".png"
//     }
//   }
//   newcall.open("GET", myPokemon[name].apiLink, true);
//   newcall.send();
// }
//
// // NOW WITH OBJECTS!!
// allPokemon = [];
// totalPokemon = 0;
//
// myPokemon = {
//   bunnelby: {
//     apiLink: "https://pokeapi.co/api/v2/pokemon/659.json"
//   },
//   rattata: {
//     apiLink: "https://pokeapi.co/api/v2/pokemon/19.json"
//   },
//   bidoof: {
//     apiLink: "https://pokeapi.co/api/v2/pokemon/399.json"
//   },
//   zigzagoon: {
//     apiLink: "https://pokeapi.co/api/v2/pokemon/263.json"
//   },
//   patrat: {
//     apiLink: "https://pokeapi.co/api/v2/pokemon/504.json"
//   },
//   zubat: {
//     apiLink: "https://pokeapi.co/api/v2/pokemon/41.json"
//   },
// }
//
//
//
//
// function createPokemon(name) {
//
//   var newcall = new XMLHttpRequest();
//   newcall.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var pokeinfo = JSON.parse(this.responseText);
//
//       //these lines push to allPokemon
//       let Pokemon = {
//         name: pokeinfo.name,
//         hp: pokeinfo.stats[5].base_stat,
//         attack: pokeinfo.stats[4].base_stat,
//         abilities: [pokeinfo.abilities[0].ability.name, pokeinfo.abilities[1].ability.name]
//       }
//       totalPokemon++;
//       allPokemon.push(Pokemon);
//     }
//   }
//   newcall.open("GET", myPokemon[name].apiLink, true);
//   newcall.send();
// }
//
// createPokemon('bunnelby');
// createPokemon('zigzagoon');
// createPokemon('patrat');
// createPokemon('zubat');
// createPokemon('bidoof');
// createPokemon('rattata')
//
// // AND HERE IS THE TRAINER!
//
// trainerKarl = {
//   name: "Karl Ketchum",
//   Pokemon: allPokemon,
//   all: function() {
//     console.log(allPokemon)
//   },
//   get: function(name) {
//     for (var i = 0; i < allPokemon.length; i++)
//       if (allPokemon[i].name === name) {
//         console.log(allPokemon[i])
//       }
//   },
// }
//
// //experimental stuff begins here
// //experimental stuff begins here
// //experimental stuff begins here


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


//to make all things 3 digits for request


Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
}

function randomPoke() {
  pokename.value = Math.floor(Math.random() * 802);
  masterRelease()
}

function masterRelease() {

  // this sets input from input "pokename" to pokeRequest
  let pokeRequest = pokename.value.toLowerCase();
  masterPokemon(pokeRequest);

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

      //clear the intro

      setTimeout(function() {
        document.getElementById('intro').innerHTML = "";
        document.getElementById('databars').classList.remove('nodisplay');
      }, 1500);


      // this prints all the data

      setTimeout(function() {

        document.getElementById("showname").innerHTML = pokeinfo.name.toUpperCase() + "  (#" + pokeinfo.id + ")";
        document.getElementById("showhp").innerHTML = " HP: " + pokeinfo.stats[5].base_stat;
        document.getElementById("showatk").innerHTML = " ATK: " + pokeinfo.stats[4].base_stat;
        document.getElementById("showspatk").innerHTML = " SP.ATK: " + pokeinfo.stats[2].base_stat;
        document.getElementById("showdef").innerHTML = " DEF: " + pokeinfo.stats[3].base_stat;
        document.getElementById("showspdef").innerHTML = " SP.DEF: " + pokeinfo.stats[1].base_stat;
        document.getElementById("showspeed").innerHTML = " SPEED " + pokeinfo.stats[0].base_stat;

        //this sees the number of abilities and prints available number of abilities

        if (pokeinfo.abilities[2] !== undefined) {
          document.getElementById("showabilities").innerHTML = "ABILITIES: " + pokeinfo.abilities[0].ability.name.toUpperCase() + ", " + pokeinfo.abilities[1].ability.name.toUpperCase() + ", " + pokeinfo.abilities[2].ability.name.toUpperCase();
        } else if (pokeinfo.abilities[1] !== undefined) {
          document.getElementById("showabilities").innerHTML = "ABILITIES: " + pokeinfo.abilities[0].ability.name.toUpperCase() + ", " + pokeinfo.abilities[1].ability.name.toUpperCase();
        } else {
          document.getElementById("showabilities").innerHTML = "ABILITY:  " + pokeinfo.abilities[0].ability.name.toUpperCase();
        }

      }, 1500);


      // creates sprites and pokemon to the side

      var pokename1 = document.getElementById('pokelist');
      var pokediv = document.createElement('div');
      pokename1.appendChild(pokediv)
      pokediv.className = "pokediv animated bounceInLeft";

      var pokesprite = document.createElement("img");
      pokesprite.src = pokeinfo.sprites.front_default;
      pokediv.appendChild(pokesprite);
      pokesprite.className = "sprites";

      var pokename = document.createElement("a");
      pokename.textContent = pokeinfo.name.toUpperCase();
      pokediv.appendChild(pokename);

      // creates attribute bars
      //hp

      setTimeout(function() {

        document.getElementById("hpbar").style.width = ((pokeinfo.stats[5].base_stat / 255) * 100) + "%";
        document.getElementById("atkbar").style.width = ((pokeinfo.stats[4].base_stat / 255) * 100) + "%";
        document.getElementById("spatkbar").style.width = ((pokeinfo.stats[2].base_stat / 255) * 100) + "%";
        document.getElementById("defbar").style.width = ((pokeinfo.stats[3].base_stat / 255) * 100) + "%";
        document.getElementById("spdefbar").style.width = ((pokeinfo.stats[1].base_stat / 255) * 100) + "%";
        document.getElementById("speedbar").style.width = ((pokeinfo.stats[0].base_stat / 255) * 100) + "%";

      }, 1500);

      //pull picture from official pokemon website

      document.getElementById("showimg").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokeinfo.id.pad(3) + ".png";

      // this adds the random animation onload

      var animationArray = ['zoomInDown', 'bounce', 'rubberBand', 'fadeInLeft', 'fadeInRight', 'flipInX', 'lightSpeedIn', 'rotateIn', 'zoomIn', 'wobble']
      var animationPick = animationArray[Math.floor(Math.random() * animationArray.length)];

      content = document.getElementById('showimg');

      content.classList.remove('hidden');
      content.classList.add('animated');
      content.classList.add(animationPick)

      setTimeout(function() {

        content = document.getElementById('showimg');
        content.classList = "";

      }, 1000);

      // animated slide in info bars

      document.getElementById('statsinfo').classList.add('expand');

      setTimeout(function() {
        document.getElementById('statsinfo').classList.remove('expand')
      }, 3000);

      //reveals the "yourpokemon" section

      document.getElementById('yourpokemon').classList.remove('hidden');
      document.getElementById('yourpokemon').classList.add('animated');
      document.getElementById('yourpokemon').classList.add('fadeIn');



    }
  }


  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokeRequest, true);
  newcall.send();

}


function clearPoke() {
  document.getElementById("pokelist").innerHTML = "";
}
