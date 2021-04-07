export const filterAlbums = (data) => {

    const element = [];

    for (let i = 0; i < data.length; i++){
        const obj = {
            name: data[i].name,
            images: data[i].images[1].url,
            albumId: data[i].id,
            uri: data[i].uri,
            artist: data[i].artists[0].name,
            artistId: data[i].artists[0].id
        }
        element.push(obj);
    };

    // const filtered = element.filter(function(element, index, array) {
    //     return (index % 2 === 0);
    // });

    return element
}