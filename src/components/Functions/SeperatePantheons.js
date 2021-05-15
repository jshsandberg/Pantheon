export const SeperatePantheons = async (data) => {

    const info = [];
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].accepted === false) {
            const obj = {
                data: data[i],
                num: 1
            };
            info.push(obj)
        } else if (data[i].music === false) {
            const obj = {
                data: data[i],
                num: 2
            };
            info.push(obj)
        } else if (data[i].vote === false) {
            const obj = {
                data: data[i],
                num: 3
            };
            info.push(obj)
        } else if (data[i].final === false) {
            const obj = {
                data: data[i],
                num: 4
            };
            info.push(obj)
        } else if ( data[i].finalVote === false) {
            const obj = {
                data: data[i],
                num: 5
            };
            info.push(obj)
        } else {
            const obj = {
                data: data[i],
                num: 6
            };
            info.push(obj)
        }
    }

    return info

}