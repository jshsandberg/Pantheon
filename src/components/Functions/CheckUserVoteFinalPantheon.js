export const CheckUserVoteFinalPantheon = (finalPantheons, username) => {
    const data = [];
    
    for (let i = 0; i < finalPantheons.length; i++) {
        if (finalPantheons[i].finalBattle.votesForFighterOne.includes(username) || finalPantheons[i].finalBattle.votesForFighterTwo.includes(username)) {
            const obj = {
                finalPantheon: finalPantheons[i],
                voted: true
            };
            data.push(obj)
        } else {
            const obj = {
                finalPantheon: finalPantheons[i],
                voted: false
            };
            data.push(obj)
        }
    };

    return data;
}