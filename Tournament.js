export const tournamentTally = (str) => {
  let matches = getMatches(str);
  let teamStats = getTeamStats(matches);
  teamStats.sort(function(first, second) {
    if(second.points === first.points) {
      return first.team.localeCompare(second.team);
    }
    return second.points - first.points;
  });
  return getResult(teamStats);
};

function getMatches(str) {
  if(!str){
    return [];
  }
  let matches = [];
  
  let lines = str.split('\n');
  for(let i = 0; i < lines.length; i++) {
    let match = lines[i].split(';');
    matches.push(match);
  }
  return matches;
}

function getTeamStats(matches) {
  let teamStats = {};
    for(let i = 0; i < matches.length; i++){
      let match = matches[i];
      let team1 = match[0];
      let team2 = match[1];
      let matchResult = match[2];
      if(!(team1 in teamStats)) {
        teamStats[team1] = {team: team1, numberOfMatches: 0, wins: 0, draws: 0, losses: 0, points:0};
      };
      if(!(team2 in teamStats)) {
        teamStats[team2] = {team: team2, numberOfMatches: 0, wins: 0, draws: 0, losses: 0, points:0};
      };
      if(matchResult === 'win') {
        teamStats[team1].wins += 1;
        teamStats[team1].points += 3;
        teamStats[team2].losses += 1;
      };
      if(matchResult === 'draw') {
        teamStats[team1].draws += 1;
        teamStats[team2].draws += 1;
        teamStats[team1].points += 1;
        teamStats[team2].points += 1;
      };
      if(matchResult === 'loss') {
        teamStats[team1].losses += 1;
        teamStats[team2].points += 3;
        teamStats[team2].wins += 1;
      };
      teamStats[team1].numberOfMatches += 1;
      teamStats[team2].numberOfMatches += 1;
    }
  return Object.values(teamStats);
}

function getResult(teamStats) {
  let result = 'Team                           | MP |  W |  D |  L |  P';
  for(let i = 0; i < teamStats.length; i++) {
    let t = teamStats[i];
    result += `\n${t.team.padEnd(31)}|` + 
              `  ${t.numberOfMatches} |` +
              `  ${t.wins} |` + 
              `  ${t.draws} |` + 
              `  ${t.losses} |` + 
              `${t.points.toString().padStart(3)}`;
  }
  return result;
}
