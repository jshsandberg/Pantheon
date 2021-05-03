export const CheckUserVotePantheon = (pantheons, username) => {
    const data = [];
    
    for (let i = 0; i < pantheons.length; i++) {
        if ((pantheons[i].battle.battleOne.votesForFighterOne.includes(username) || pantheons[i].battle.battleOne.votesForFighterTwo.includes(username)) && (pantheons[i].battle.battleTwo.votesForFighterOne.includes(username) || pantheons[i].battle.battleTwo.votesForFighterTwo.includes(username))) {
            const obj = {
                pantheon: pantheons[i],
                battleOne: true,
                battleTwo: true
            };
            data.push(obj)
        } else if ((pantheons[i].battle.battleOne.votesForFighterOne.includes(username) || pantheons[i].battle.battleOne.votesForFighterTwo.includes(username)) && (!pantheons[i].battle.battleTwo.votesForFighterOne.includes(username) || !pantheons[i].battle.battleTwo.votesForFighterTwo.includes(username))) {
            console.log("no vote for battleTwo")
            const obj = {
                pantheon: pantheons[i],
                battleOne: true,
                battleTwo: false
            };
            data.push(obj)
        } else if ((!pantheons[i].battle.battleOne.votesForFighterOne.includes(username) || !pantheons[i].battle.battleOne.votesForFighterTwo.includes(username)) && (pantheons[i].battle.battleTwo.votesForFighterOne.includes(username) || pantheons[i].battle.battleTwo.votesForFighterTwo.includes(username))) {
            console.log("no vote for battleOne")
            const obj = {
                pantheon: pantheons[i],
                battleOne: false,
                battleTwo: true
            };
            data.push(obj)
        } else {
            const obj = {
                pantheon: pantheons[i],
                battleOne: false,
                battleTwo: false
            };
            data.push(obj)
        };
    };

    return data;

}