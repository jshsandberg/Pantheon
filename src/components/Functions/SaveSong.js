import { API } from "../../utils/API";

export const SaveSong = async (user, song, pantheonId) => {
    const data= {};
    const obj = {
        name: song.name,
        artist: song.artists[0].name,
        album: song.album.name,
        image: song.album.images[1].url,
        id: song.id,
        uri: song.uri
    }
    await API.saveSong(user, obj, pantheonId).then(res => data["res"] = res.data);
    return data.res;
}