function solution(players, callings) {
    const playerIndexes = {};
    players.forEach((player, index) => {
        playerIndexes[player] = index;
    });

    callings.forEach(name => {
        const currentPlayerPosition = playerIndexes[name];
        const prevPlayer = players[currentPlayerPosition - 1];

        players[currentPlayerPosition] = prevPlayer;
        players[currentPlayerPosition - 1] = name;

        playerIndexes[name] = currentPlayerPosition - 1;
        playerIndexes[prevPlayer] = currentPlayerPosition;
    });

    return players;
}