import React from "react"
import { v4 as uuidv4 } from 'uuid';

function GifList({gifs}) {

    return (
        <ul>
            {gifs.map((gif) => {
                return <li key={uuidv4()}><img src={gif} alt="gif"/></li>
            })}
        </ul>
    );
}

export default GifList;