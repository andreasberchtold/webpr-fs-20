// Todo:

// create a proper Player construction with
// state:
// fallbackIndex = 0 // place to fall back on oopsie
// progressIndex = 0 // place having been proceeding to
// and functions:
// proceed(stride) // proceed so many places
// fallback()      // "oopsie": go back to last start (fallback position)
// turn()          // cash in your win, update fallback position for next turn

const randomRgb = _ => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};


const Player = name => {

    let fallbackIndex = 0;
    let progressIndex = 0;

    const color = randomRgb();

    const getFallbackIndex = _ => fallbackIndex;
    const getProgressIndex = _ => progressIndex;
    const proceed = x => progressIndex += x;
    const fallback = _ => progressIndex = fallbackIndex;
    const turn = _ => fallbackIndex = progressIndex;

    const getName = _ => name;
    const getColor = _ => color;

    return {
        getFallbackIndex,
        getProgressIndex,
        proceed,
        fallback,
        turn,
        getName,
        getColor
    };
};

const Game = _ => {
    let playerCount = 0;
    let currentPlayerId = 0;
    let players = [];

    const nextPlayer = _ => currentPlayerId = (currentPlayerId + 1) % playerCount;
    const addPlayer = player => {
        playerCount++;
        players.push(player);
    };
    const getCurrentPlayer = _ => players[currentPlayerId];
    const getPlayers = _ => players;

    return {
        nextPlayer,
        addPlayer,
        getCurrentPlayer,
        getPlayers
    }

};


const nrOfFields = 100;

function start() {
    const fields = document.getElementById('fields');

    for (let i = 0; i < nrOfFields; i++) {
        let field = document.createElement("DIV");
        field.setAttribute("ID", "FIELD-" + i);
        field.innerText = " ";
        fields.appendChild(field);
    }
    display();
}

function dice() {
    const player = game.getCurrentPlayer();
    let stride = Math.round(1 + Math.random() * 5);
    document.getElementById('dice').innerText = "" + stride;
    if (stride === 3) {
        console.log('falling back');
        player.fallback();
        turn();
    } else if (player.getProgressIndex() + stride >= nrOfFields) {
        console.log('overshot');
        player.fallback();
        turn();
    } else {
        player.proceed(stride);

        if(player.getProgressIndex() == nrOfFields - 1) {
            console.log('won');
        }
        display();
    }
}

function turn() {
    const player = game.getCurrentPlayer();
    player.turn();
    game.nextPlayer();
    display();
}

function display() {

    const player = game.getCurrentPlayer();

    let currentPlayerSpan = document.getElementById("currentPlayer");
    currentPlayerSpan.innerText = player.getName();


    for (let i = 0; i < nrOfFields; i++) {
        let field = document.getElementById("FIELD-" + i);
        field.setAttribute("CLASS", "field");
        field.style.backgroundColor = 'lightgrey';
        field.style.borderColor = 'lightgrey';
    }

    for (let p of game.getPlayers()) {

        let fallbackfield = document.getElementById("FIELD-" + p.getFallbackIndex());
        fallbackfield.style.borderColor = p.getColor();
        fallbackfield.setAttribute("CLASS", "field fallback");

        let progressfield = document.getElementById("FIELD-" + p.getProgressIndex());
        progressfield.style.backgroundColor = p.getColor();
        progressfield.setAttribute("CLASS", "field progress");

    }


}

game = Game();
game.addPlayer(Player("One"));
game.addPlayer(Player("Two"));

