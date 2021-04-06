import React, { useEffect, useState } from "react";
import { filterAlbums } from "../Functions/FilterAlbums";

export default function ArtistAlbums({ data }) {

    const [album, setAlbums] = useState(null)

    useEffect(() => {

        const filteredAlbums = async (data) => {
            const filtered = await filterAlbums(data)
            await setAlbums(filtered)
        };
        filteredAlbums(data);
    }, [data])

    return (
        <div>
            {album.map((item, i) => {
                console.log(item)
                return (
                    <div>
                        <img src={item.images} alt="album" />
                    </div>    
                )
            })}
        </div>
    )
}