

const button = document.getElementById('flip-btn');
const image = document.getElementById('coin');
const tag = document.getElementById('tag')
const heads = document.getElementById('heads')
const tails = document.getElementById('tails')
const selected = document.getElementById('selected')

let names = ["Heads", "Tails"]
let states = ["Assets/Heads.png", "Assets/Tails.png"];
let chosen = false
let picked = 0 

function selectHeads(){
    chosen = true;
    picked = 0;
    selected.innerHTML = "You Picked: Heads"
}

function selectTails(){
    chosen = true;
    picked = 1;
    selected.innerHTML = "You Picked: Tails"
}

function flip(){
    if (chosen){
        state = Math.round(Math.random())
        image.src = states[state];
        if (picked == state) {
            tag.innerHTML = names[state] + ": You Win";
        }
        else {
            tag.innerHTML = names[state] + ": You Lose";
        }
        chosen = false;
    }

    else {
        tag.innerHTML = "Select State";
    }
}


button.addEventListener('click', flip);
heads.addEventListener('click', selectHeads);
tails.addEventListener('click', selectTails);