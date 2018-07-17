console.log("Gotta Catch Em' All")

function release() {
  document.getElementById('bodytag').style.backgroundColor = "white";
}

function unclick() {
  document.getElementById('bodytag').style.backgroundColor = "";
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  }
};

xhttp.open("GET", "https://raw.githubusercontent.com/itskarl/pokemon-pokedex/master/rattata", true);
xhttp.send();


var pokeinfo = JSON.parse(this.responseText);
console.log(pokeinfo.name)


function postPokemon() {
  //clear the content
  document.getElementById('showpokemon').innerHTML = "";

  var pokename = document.createElement("h1");
  var poke1 = document.getElementById('showpokemon')
  pokename.textContent = "NAME";
  poke1.appendChild(pokename);

  var pokemon = document.createElement('img');
  var pokebox = document.getElementById('showpokemon');
  pokemon.src = "https://static.pokemonpets.com/images/monsters-images-800-800/19-Rattata.png";
  pokebox.appendChild(pokemon);


}



// var em = document.createElement('em');
// var para = document.querySelector(''); // reference an existing p element
// em.textContent = 'Hello there!'; // give em some text content
// para.appendChild(em); // embed em inside para
