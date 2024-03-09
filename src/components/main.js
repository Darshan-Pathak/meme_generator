import React from "react";

export default function main(){
    return(
        <div className="contain">
             <form className="form--class">
                <input className="form--input" placeholder="Top Text"type="text" />
                <input className="form--input" placeholder="Bottom Text"type="text" />
                <button className="form--button"> 
                   Get more photo...
                </button>
             </form>
        </div>
    )
}