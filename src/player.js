let players = (function () {
    let allPlayers = [];

    let players = function () {
        return allPlayers;
    }

    let reset = function () {
        allPlayers = [];
    }

    let game = function () {
        reset();
        newPlayer('house', 'auto');
    }

    let newPlayer = function (name, type = 'human') {
        let player = {
            id: allPlayers.length + 1,
            name: name,
            type: type,
            hand: [],
            totalPoints: 0
        }

        allPlayers.push(player);
    }

    return {
        game: game,
        players: players,
        newPlayer: newPlayer,
        reset: reset
    }
})();