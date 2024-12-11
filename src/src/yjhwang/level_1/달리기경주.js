function solution(players, callings) {
    const rankingTable = new Map();
    const ranking = players.slice();
  
    players.forEach((player, index) => {
      rankingTable.set(player, { player, index });
    });
  
    for (let i = 0; i < callings.length; i++) {
      const callingPlayer = rankingTable.get(callings[i]);
      const frontPlayer = rankingTable.get(ranking[callingPlayer.index - 1]);
  
      ranking[callingPlayer.index - 1] = callingPlayer.player;
      ranking[callingPlayer.index] = frontPlayer.player;
      rankingTable.set(callingPlayer.player, {
        player: callingPlayer.player,
        index: callingPlayer.index - 1,
      });
      rankingTable.set(frontPlayer.player, {
        player: frontPlayer.player,
        index: frontPlayer.index + 1,
      });
    }
  
    console.log(ranking);
  
    return ranking;
  }