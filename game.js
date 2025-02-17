const pokemon = ["Darmanitan", "Frosmoth", "Dracovish", "Crabominable", "Togedemaru", "Eldegoss", "Morpeko", "Tatsugiri", "Turtonator", "Coalossal", "Stonjourner", "Centiskorch", "Gourgeist", "Runerigus", "Minior", "Bruxish", "Komala", "Clawitzer", "Druddigon", "Falinks"];
const linux = ["Debian", "Arch", "Manjaro", "Gentoo", "Tails", "Solus", "Slackware", "Zorin", "Endeavour", "Void", "Bodhi", "Alpine", "Sabayon", "Mageia", "Nix", "Feren", "Trisquel", "Siduction", "KaOS", "Hyperbola"];
const starwars = ["Therm Scissorpunch", "Elan Sleazebaggano", "Oppo Rancisis", "Jaxxon", "Toryn Farr", "Ransolm Casterfo", "Vober Dand", "Bollux", "Shara Bey", "Bazine Netal", "Sio Bibble", "Bolla Ropal", "Quarsh Panaka", "Rako Hardeen", "Hurst Romodi", "Tasu Leech", "Maximilian Veers", "Garven Dreis", "Tion Medon", "Bodhi Rook"];
const baseball = ["Eppa Rixey", "Kimera Bartee", "Simmy Murch", "Bitsy Mott", "Rugger Ardizoia", "Porfi Altamirano", "Callix Crabbe", "Jair Jurrjens", "Ping Bodie", "Yohendrick Pinango", "Smead Jolley", "Shags Horan", "Subby Byas", "Rocky Cherry", "Tot Pressnell", "Admiral Schlei", "Sibby Sisti", "Dal Maxvill", "Stubby Clapp", "Biff Pocoroba"];

let namePool = [];
let score = 0;

function startGame() {
  document.querySelector("button").style.display = "none";
  document.getElementById("game").style.display = "block";
  namePool = [...pokemon, ...linux, ...starwars, ...baseball].sort(() => Math.random() - 0.5);
  setNewQuestion();
}

function setNewQuestion() {
  if (namePool.length === 0) {
    document.getElementById("question").textContent = "Game Over!";
    document.getElementById("buttons").style.display = "none";
    return;
  }
  document.getElementById("question").textContent = namePool.pop();
}

function makeGuess(category) {
  let currentName = document.getElementById("question").textContent;
  let correctCategory = pokemon.includes(currentName) ? "pokemon" :
                        linux.includes(currentName) ? "linux" :
                        starwars.includes(currentName) ? "starwars" :
                        "baseball";

  if (category === correctCategory) {
    document.getElementById("result").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("result").textContent = "❌ Incorrect!";
  }
  document.getElementById("score").textContent = `Score: ${score}`;

  setTimeout(() => {
    document.getElementById("result").textContent = "";
    setNewQuestion();
  }, 1000);
}
