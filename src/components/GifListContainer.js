import React, {useEffect, useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [gifs,setGifs] = useState([])
    const [search,setSearch] = useState("")
    const [fetchURL,setFetchURL] = useState("")

    const apiKey = 'dc6zaTOxFJmzC'
    

    
    useEffect( () => {
        if (fetchURL) {
            
            fetch(fetchURL)
                .then(resp => resp.json())
                .then((resp) => {
                    const fetchedGifs = resp.data.map( (gif) => {
                        return gif.images.original.url
                    }
                    )
                    setGifs(fetchedGifs)
                })

        }
    },[fetchURL])

    function onSubmit(query) {
        setFetchURL(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`)
        setSearch("")
    }

    function onSearchChange(text) {
        setSearch(text)
    }
    return (
        <div>
            <GifList gifs={gifs}/>
            <GifSearch search={search} onSubmit={onSubmit} onSearchChange={onSearchChange}/>
        </div>
    );
}

export default GifListContainer;