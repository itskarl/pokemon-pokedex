console.log("Gotta Catch Em' All!!!")

cancel = false

setTimeout(function() {
  document.getElementById('oakbox').classList.remove('hidden');
  document.getElementById('oakbox').classList.add('animated');
  document.getElementById('oakbox').classList.add('slideInDown')
}, 650);


spritecount = 0;
//CREATING A masterList

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

      // the close button

      var closebutton = document.createElement('div');
      var xbtn = document.createTextNode('\xD7');
      closebutton.appendChild(xbtn);
      closebutton.className = "closebutton"
      pokediv.appendChild(closebutton);

      closebutton.id = "closebutton" + spritecount;
      pokediv.id = "pokediv" +spritecount;

      document.getElementById(closebutton.id).addEventListener("click", function() {
        cancel = true;
        document.getElementById(pokediv.id).classList.add('animated');
        document.getElementById(pokediv.id).classList.add('zoomOutLeft');
          setTimeout(function() {
        document.getElementById(pokediv.id).classList.add('nodisplay');
      },500,);
      });
      cancel = false;

      document.getElementById(pokediv.id).addEventListener("click", function() {
        recallPokemon(pokeRequest);
        document.getElementById(pokediv.id).classList.add('animated');
        document.getElementById(pokediv.id).classList.add('pulse');
          setTimeout(function() {
        document.getElementById(pokediv.id).classList.remove('pulse');
      },1000,);

      });

      spritecount++;
      // creates attribute bars
      //hp

      setTimeout(function() {

        document.getElementById("hpbar").style.width = ((pokeinfo.stats[5].base_stat / 200) * 100) + "%";
        document.getElementById("atkbar").style.width = ((pokeinfo.stats[4].base_stat / 181) * 100) + "%";
        document.getElementById("spatkbar").style.width = ((pokeinfo.stats[2].base_stat / 173) * 100) + "%";
        document.getElementById("defbar").style.width = ((pokeinfo.stats[3].base_stat / 200) * 100) + "%";
        document.getElementById("spdefbar").style.width = ((pokeinfo.stats[1].base_stat / 200) * 100) + "%";
        document.getElementById("speedbar").style.width = ((pokeinfo.stats[0].base_stat / 160) * 100) + "%";

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

      //this section prints out pokemon types
      //the slidedown animation

      document.getElementById('typebox1').classList.add('expanddown');

      setTimeout(function() {
        document.getElementById('typebox1').classList.remove('expanddown');

      }, 1500);

      setTimeout(function() {
        document.getElementById('typebox1').classList.remove('hidden')

        if (pokeinfo.types[0].type.name === "flying") {
          document.getElementById('type1').src = "images/flying.png"
        } else if (pokeinfo.types[0].type.name === "fairy") {
          document.getElementById('type1').src = "images/fairy.png"
        } else if (pokeinfo.types[0].type.name === "dragon") {
          document.getElementById('type1').src = "images/dragon.png"
        } else if (pokeinfo.types[0].type.name === "steel") {
          document.getElementById('type1').src = "images/steel.png"
        } else if (pokeinfo.types[0].type.name === "rock") {
          document.getElementById('type1').src = "images/rock.png"
        } else if (pokeinfo.types[0].type.name === "bug") {
          document.getElementById('type1').src = "images/bug.png"
        } else if (pokeinfo.types[0].type.name === "ghost") {
          document.getElementById('type1').src = "images/ghost.png"
        } else if (pokeinfo.types[0].type.name === "dark") {
          document.getElementById('type1').src = "images/dark.png"
        } else if (pokeinfo.types[0].type.name === "psychic") {
          document.getElementById('type1').src = "images/psychic.png"
        } else if (pokeinfo.types[0].type.name === "fighting") {
          document.getElementById('type1').src = "images/fighting.png"
        } else if (pokeinfo.types[0].type.name === "ground") {
          document.getElementById('type1').src = "images/ground.png"
        } else if (pokeinfo.types[0].type.name === "poison") {
          document.getElementById('type1').src = "images/poison.png"
        } else if (pokeinfo.types[0].type.name === "ice") {
          document.getElementById('type1').src = "images/ice.png"
        } else if (pokeinfo.types[0].type.name === "electric") {
          document.getElementById('type1').src = "images/electric.png"
        } else if (pokeinfo.types[0].type.name === "grass") {
          document.getElementById('type1').src = "images/grass.png"
        } else if (pokeinfo.types[0].type.name === "water") {
          document.getElementById('type1').src = "images/water.png"
        } else if (pokeinfo.types[0].type.name === "fire") {
          document.getElementById('type1').src = "images/fire.png"
        } else if (pokeinfo.types[0].type.name === "normal") {
          document.getElementById('type1').src = "images/normal.png"
        } else {
          console.log("no type")
        }
      }, 750);

      //type2


      setTimeout(function() {

        document.getElementById('typebox2').classList.add('expanddown2');

        setTimeout(function() {
          document.getElementById('typebox2').classList.remove('expanddown2')
        }, 1500);


        if (pokeinfo.types[1] == undefined) {


          setTimeout(function() {
            document.getElementById('typebox2').classList.add('hidden');
            document.getElementById('type2').src = "";
          }, 750);

          console.log("no 2nd type")

        } else {
          setTimeout(function() {
            document.getElementById('typebox2').classList.remove('hidden')

            if (pokeinfo.types[1].type.name === "flying") {
              document.getElementById('type2').src = "images/flying.png"
            } else if (pokeinfo.types[1].type.name === "fairy") {
              document.getElementById('type2').src = "images/fairy.png"
            } else if (pokeinfo.types[1].type.name === "dragon") {
              document.getElementById('type2').src = "images/dragon.png"
            } else if (pokeinfo.types[1].type.name === "steel") {
              document.getElementById('type2').src = "images/steel.png"
            } else if (pokeinfo.types[1].type.name === "rock") {
              document.getElementById('type2').src = "images/rock.png"
            } else if (pokeinfo.types[1].type.name === "bug") {
              document.getElementById('type2').src = "images/bug.png"
            } else if (pokeinfo.types[1].type.name === "ghost") {
              document.getElementById('type2').src = "images/ghost.png"
            } else if (pokeinfo.types[1].type.name === "dark") {
              document.getElementById('type2').src = "images/dark.png"
            } else if (pokeinfo.types[1].type.name === "psychic") {
              document.getElementById('type2').src = "images/psychic.png"
            } else if (pokeinfo.types[1].type.name === "fighting") {
              document.getElementById('type2').src = "images/fighting.png"
            } else if (pokeinfo.types[1].type.name === "ground") {
              document.getElementById('type2').src = "images/ground.png"
            } else if (pokeinfo.types[1].type.name === "poison") {
              document.getElementById('type2').src = "images/poison.png"
            } else if (pokeinfo.types[1].type.name === "ice") {
              document.getElementById('type2').src = "images/ice.png"
            } else if (pokeinfo.types[1].type.name === "electric") {
              document.getElementById('type2').src = "images/electric.png"
            } else if (pokeinfo.types[1].type.name === "grass") {
              document.getElementById('type2').src = "images/grass.png"
            } else if (pokeinfo.types[1].type.name === "water") {
              document.getElementById('type2').src = "images/water.png"
            } else if (pokeinfo.types[1].type.name === "fire") {
              document.getElementById('type2').src = "images/fire.png"
            } else if (pokeinfo.types[1].type.name === "normal") {
              document.getElementById('type2').src = "images/normal.png"
            }
          }, 750);
        }
      }, 750);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokeRequest, true);
  newcall.send();

  //this calls description
  var pokecall = new XMLHttpRequest();
  pokecall.open("GET", "https://pokeapi.co/api/v2/pokemon-species/" + pokeRequest, true);
  pokecall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeflavor = JSON.parse(this.responseText);

      for (q = 0; q < pokeflavor.flavor_text_entries.length; q++)
        if (pokeflavor.flavor_text_entries[q].language.name == "en") {
          document.getElementById('pokedesc').innerHTML = pokeflavor.flavor_text_entries[q].flavor_text;
        }
    }
  }
  pokecall.send();
  //description done

}

// when pushing the DOM created sprites...

function recallPokemon(pokeRequest) {

  if (cancel == false){

  masterPokemon(pokeRequest);

  var newcall = new XMLHttpRequest();
  newcall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeinfo = JSON.parse(this.responseText);

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



      // creates attribute bars
      //hp

      setTimeout(function() {

        document.getElementById("hpbar").style.width = ((pokeinfo.stats[5].base_stat / 255) * 100) + "%";
        document.getElementById("atkbar").style.width = ((pokeinfo.stats[4].base_stat / 200) * 100) + "%";
        document.getElementById("spatkbar").style.width = ((pokeinfo.stats[2].base_stat / 200) * 100) + "%";
        document.getElementById("defbar").style.width = ((pokeinfo.stats[3].base_stat / 255) * 100) + "%";
        document.getElementById("spdefbar").style.width = ((pokeinfo.stats[1].base_stat / 255) * 100) + "%";
        document.getElementById("speedbar").style.width = ((pokeinfo.stats[0].base_stat / 200) * 100) + "%";

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

      //this section prints out pokemon types

      //the slidedown animation
      document.getElementById('typebox1').classList.add('expanddown');

      setTimeout(function() {
        document.getElementById('typebox1').classList.remove('expanddown');

      }, 1500);

      setTimeout(function() {
        document.getElementById('typebox1').classList.remove('hidden')

        if (pokeinfo.types[0].type.name === "flying") {
          document.getElementById('type1').src = "images/flying.png"
        } else if (pokeinfo.types[0].type.name === "fairy") {
          document.getElementById('type1').src = "images/fairy.png"
        } else if (pokeinfo.types[0].type.name === "dragon") {
          document.getElementById('type1').src = "images/dragon.png"
        } else if (pokeinfo.types[0].type.name === "steel") {
          document.getElementById('type1').src = "images/steel.png"
        } else if (pokeinfo.types[0].type.name === "rock") {
          document.getElementById('type1').src = "images/rock.png"
        } else if (pokeinfo.types[0].type.name === "bug") {
          document.getElementById('type1').src = "images/bug.png"
        } else if (pokeinfo.types[0].type.name === "ghost") {
          document.getElementById('type1').src = "images/ghost.png"
        } else if (pokeinfo.types[0].type.name === "dark") {
          document.getElementById('type1').src = "images/dark.png"
        } else if (pokeinfo.types[0].type.name === "psychic") {
          document.getElementById('type1').src = "images/psychic.png"
        } else if (pokeinfo.types[0].type.name === "fighting") {
          document.getElementById('type1').src = "images/fighting.png"
        } else if (pokeinfo.types[0].type.name === "ground") {
          document.getElementById('type1').src = "images/ground.png"
        } else if (pokeinfo.types[0].type.name === "poison") {
          document.getElementById('type1').src = "images/poison.png"
        } else if (pokeinfo.types[0].type.name === "ice") {
          document.getElementById('type1').src = "images/ice.png"
        } else if (pokeinfo.types[0].type.name === "electric") {
          document.getElementById('type1').src = "images/electric.png"
        } else if (pokeinfo.types[0].type.name === "grass") {
          document.getElementById('type1').src = "images/grass.png"
        } else if (pokeinfo.types[0].type.name === "water") {
          document.getElementById('type1').src = "images/water.png"
        } else if (pokeinfo.types[0].type.name === "fire") {
          document.getElementById('type1').src = "images/fire.png"
        } else if (pokeinfo.types[0].type.name === "normal") {
          document.getElementById('type1').src = "images/normal.png"
        } else {
          console.log("no type")
        }
      }, 750);

      //type2


      setTimeout(function() {

        document.getElementById('typebox2').classList.add('expanddown2');

        setTimeout(function() {
          document.getElementById('typebox2').classList.remove('expanddown2')
        }, 1500);


        if (pokeinfo.types[1] == undefined) {


          setTimeout(function() {
            document.getElementById('typebox2').classList.add('hidden');
            document.getElementById('type2').src = "";
          }, 750);

          console.log("no 2nd type")

        } else {
          setTimeout(function() {
            document.getElementById('typebox2').classList.remove('hidden')

            if (pokeinfo.types[1].type.name === "flying") {
              document.getElementById('type2').src = "images/flying.png"
            } else if (pokeinfo.types[1].type.name === "fairy") {
              document.getElementById('type2').src = "images/fairy.png"
            } else if (pokeinfo.types[1].type.name === "dragon") {
              document.getElementById('type2').src = "images/dragon.png"
            } else if (pokeinfo.types[1].type.name === "steel") {
              document.getElementById('type2').src = "images/steel.png"
            } else if (pokeinfo.types[1].type.name === "rock") {
              document.getElementById('type2').src = "images/rock.png"
            } else if (pokeinfo.types[1].type.name === "bug") {
              document.getElementById('type2').src = "images/bug.png"
            } else if (pokeinfo.types[1].type.name === "ghost") {
              document.getElementById('type2').src = "images/ghost.png"
            } else if (pokeinfo.types[1].type.name === "dark") {
              document.getElementById('type2').src = "images/dark.png"
            } else if (pokeinfo.types[1].type.name === "psychic") {
              document.getElementById('type2').src = "images/psychic.png"
            } else if (pokeinfo.types[1].type.name === "fighting") {
              document.getElementById('type2').src = "images/fighting.png"
            } else if (pokeinfo.types[1].type.name === "ground") {
              document.getElementById('type2').src = "images/ground.png"
            } else if (pokeinfo.types[1].type.name === "poison") {
              document.getElementById('type2').src = "images/poison.png"
            } else if (pokeinfo.types[1].type.name === "ice") {
              document.getElementById('type2').src = "images/ice.png"
            } else if (pokeinfo.types[1].type.name === "electric") {
              document.getElementById('type2').src = "images/electric.png"
            } else if (pokeinfo.types[1].type.name === "grass") {
              document.getElementById('type2').src = "images/grass.png"
            } else if (pokeinfo.types[1].type.name === "water") {
              document.getElementById('type2').src = "images/water.png"
            } else if (pokeinfo.types[1].type.name === "fire") {
              document.getElementById('type2').src = "images/fire.png"
            } else if (pokeinfo.types[1].type.name === "normal") {
              document.getElementById('type2').src = "images/normal.png"
            }
          }, 750);
        }
      }, 750);
    }
  }
  newcall.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokeRequest, true);
  newcall.send();

  //this calls description
  var pokecall = new XMLHttpRequest();
  pokecall.open("GET", "https://pokeapi.co/api/v2/pokemon-species/" + pokeRequest, true);
  pokecall.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pokeflavor = JSON.parse(this.responseText);

      for (q = 0; q < pokeflavor.flavor_text_entries.length; q++)
        if (pokeflavor.flavor_text_entries[q].language.name == "en") {
          document.getElementById('pokedesc').innerHTML = pokeflavor.flavor_text_entries[q].flavor_text;
        }
    }
  }
  pokecall.send();
  //description done
}
}


// modalstuff

var modal = document.getElementById('flavortextbox');
var btn = document.getElementById("moreinfo");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
