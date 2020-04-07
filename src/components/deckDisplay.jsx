import React from 'react'
import { Link } from 'react-router-dom';


export default function DeckDisplay(props) {


    
        let dis = props.decks;
        return (
            
            <div>
            {dis.length>0 && dis.map((item, index)=>{                    
                    return <>
                    <h3 key={index}>{item.name}</h3>
                    <Link to={"/viewDeck/" + index + "/" + props.view}><img src={item.decklist[0].imageUrl} ></img></Link>
                    
                    </>
                })}
            </div>
        )
    
}
