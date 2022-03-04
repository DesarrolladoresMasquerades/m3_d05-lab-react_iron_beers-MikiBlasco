import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgNew from '../assets/new-beer.png';
import imgHome from '../assets/beers.png';

function HomePage() {
    return (
        <div>
            <img src={imgHome} alt="" secret=""/>
            <br/>
            <Link to="/beers">
                <button>beers</button>
            </Link>
            <Link to="/random-beer">
                <button>random beer</button>
            </Link>
            <Link to="/new-beer">
                <button>new beer</button>
            </Link>
        </div>
    )
}

export default HomePage


