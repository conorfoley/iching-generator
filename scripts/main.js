var trigrams = {

	"0,0,0": {
		"lines": [0, 0, 0],
		"name": "Ch'ien",
		"attribute": "Strong",
		"image": "Heaven",
		"relationship": "Father"
	},

	"1,1,1": {
		"lines": [1, 1, 1],
		"name": "K'un",
		"attribute": "Devoted and Yielding",
		"image": "Earth",
		"relationship": "Mother"
	},

	"0,1,1": {
		"lines": [0, 1, 1],
		"name": "Chen",
		"attribute": "Inciting and Movement",
		"image": "Thunder",
		"relationship": "First Son"
	},

	"1,0,1": {
		"lines": [1, 0, 1],
		"name": "K'an",
		"attribute": "Dangerous",
		"image": "Water",
		"relationship": "Second Son"
	},

	"1,1,0": {
		"lines": [1, 1, 0],
		"name": "Ken",
		"attribute": "Resting",
		"image": "Mountain",
		"relationship": "Third Son"
	},
	"1,0,0": {
		"lines": [1, 0, 0],
		"name": "Sun",
		"attribute": "Penetrating",
		"image": "Wind and Wood",
		"relationship": "First Daughter"
	},

	"0,1,0": {
		"lines": [0, 1, 0],
		"name": "Li",
		"attribute": "Light-giving",
		"image": "Fire",
		"relationship": "Second Daughter"
	},

	"0,0,1": {
		"lines": [0, 0, 1],
		"name": "Tui",
		"attribute": "Joyful",
		"image": "Lake",
		"relationship": "Third Daughter"
	}

}

var lineArr = [];
var hexagram = [];
var trigram1 = [];
var trigram2 = [];
function d16Roll(){
	return Math.floor(Math.random() * 16) + 1;
}

function generateLine(){
	roll = d16Roll();
	if (roll === 1){
		return "oldYin";
	}
	else if (roll > 1 && roll <= 4){
		return "oldYang";
	}
	else if (roll > 4 && roll <= 10){
		return "youngYang";
	}
	else {
		return "youngYin";
	}
};

// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) { //decrease val to increase fade time
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

var generateButton = document.querySelector('button');



generateButton.onclick = function(){
	for (var i = 0; i < 6; i++){
		var line = generateLine();


		fadeIn(document.querySelector('#line'+(i+1)));
		document.getElementById("line" + (i+1)).className = "line " + line;

		lineArr[i] = line;

	}
	for (var j = 0; j < 6; j++){
		if (lineArr[j] === "oldYang" || lineArr[j] === "youngYang"){
			hexagram[j] = 0;
		}
		else if (lineArr[j] === "oldYin" || lineArr[j] === "youngYin") {
			hexagram[j] = 1;
		}
	}
	trigram1 = trigrams[hexagram.slice(0, 3).toString()];
	trigram2 = trigrams[hexagram.slice(3).toString()];
	console.log(lineArr);
	console.log(trigram1);
	console.log(trigram2);
	document.getElementById("fortune").innerHTML = "know that " + trigram2.name + " is above " + trigram1.name + "\nwhile " +
		trigram2.image + " moves over " + trigram1.image +
		"\nthe " + trigram2.attribute + " must become " + trigram1.attribute;
}
