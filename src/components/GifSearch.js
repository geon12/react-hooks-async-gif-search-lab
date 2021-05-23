import React from "react"

function GifSearch({search,onSubmit,onSearchChange}) {

    function handleSubmit(e) {
        e.preventDefault();
        //onSubmit(e.target.search.value)
        onSubmit(search)
    }

    function handleChange(e) {
        onSearchChange(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter a Search Term:</p>
            <input type="text" name="search" value={search} onChange={handleChange}></input>
            <button type="submit">Find Gifs</button>
        </form>
    );

}

export default GifSearch;
