import { useState } from "react"

function Search({query, searchBeer}) {

    return(

        <form>
            <label>Search a beer</label>
            <input type="text" name="beer" value={query} onChange={searchBeer}></input>
        </form>

    )
}

export default Search