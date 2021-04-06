import axios from "axios";

export const getArtist = async (id) => {

    const client_id = "017a12b1f67741a48d49f1860b9d32fd";
    const client_secret = "0b468a31a00f4ac3993afee311172a6e";

    let data = {};

    await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    }).then(async tokenResponse => {
        await axios(`https://api.spotify.com/v1/artists/${id}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
          })
          .then(res => {
                const obj = {
                  artistName: res.data.name,
                  followers: res.data.followers.total,
                  images: res.data.images[1].url
                }
                data["artist"] = obj
          });
    });

    await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    }).then(async tokenResponse => {
        await axios(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token},
            params: { market: "US"}
          })
          .then(res => { 
              data["topTracks"] = res.data.tracks
          });
    });

    await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    }).then(async tokenResponse => {
        await axios(`https://api.spotify.com/v1/artists/${id}/albums`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token},
            params: { market: "US", include_groups: "album"}
          })
          .then(res => {
              data["albums"] = res.data.items
          });
    });

    return data

}