import React from "react";
import memesData from "../memesData";

//Meme calling function

export default function Meme () {
    
    function handleClick (){
        // console.log("Button clicked !");

        const joke = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * joke.length);
        const memer = (joke[randomNum]).map(items => <p key={items}>{items}</p>);
        
        console.log(memer);

    }
    
    return (
        <div className="meme">
        
                <input type="text" value="Shut up" className="meme-input"/>
                <input type="text" value="and take my money" className="meme-input"/>
                <input type="submit" value="Get a new image" className="new-meme" onClick= {handleClick} />

                {/* <h1>{url}</h1> */}
        
        </div>
    )
}