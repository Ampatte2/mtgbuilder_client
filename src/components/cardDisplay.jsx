import React from 'react'
import {Modal} from "./index"

export default function CardDisplay(props) {
    
    const dis = props.cardList
    
    return (
        <>
            {Object.keys(dis).length> 0 ? Object.values(dis).map((item, index)=>{
                        let typeDescription, addButton, deleteButton;
                        if(props.isAuth){
                            addButton = <button onClick={()=>props.addMyCard(item)}>Add Card To Library</button>
                        }
                        if(props.deleteCard){
                            deleteButton = <button onClick={()=>props.deleteCard(item)}>Delete Card From Library</button>
                        }
                        if(item["name"]==="No Cards Found"){
                            return <>
                                        <h1 key={index}>{item["name"]}</h1>
                                        <img src={item.imageUrl} alt={item["name"]} width="250px" height="250px"/>
                                    </>
                        }
                        else if(item.imageUrl){
                            if(item["types"][0]==="Creature"){
                                typeDescription = <><h3>Power {item["power"]}</h3><h3>Toughness {item["toughness"]}</h3></>
                            }else if (item["types"][0]==="Planeswalker"){
                                typeDescription = <><h3>Loyalty {item["loyalty"]}</h3></>
                            }
                            return <>
                                    <h1 key={index}>{item["name"]}</h1>
                                    <Modal item={item}/>
                                    <h3>CMC {item["cmc"]}</h3>
                                    {typeDescription}
                                    <h3>{item["type"]}</h3>
                                    <h3>{item["text"]}</h3>
                                    {addButton}
                                    {deleteButton}
                                    </>
                        }else{
                            if(item["types"][0]==="Creature"){
                                typeDescription = <><h3>Power {item["power"]}</h3><h3>Toughness {item["toughness"]}</h3></>
                            }else if (item["types"][0]==="Planeswalker"){
                                typeDescription = <><h3>Loyalty {item["loyalty"]}</h3></>
                            }
                            return <>
                            <h1 key={index}>{item["name"]}</h1>
                            <Modal item={item}/>
                            <h3>CMC {item["cmc"]}</h3>
                            {typeDescription}
                            <h3>{item["type"]}</h3>
                            <h3>{item["text"]}</h3>
                            {addButton}
                            {deleteButton}
                            </>
                        }
                    }
        
            ): <h3>{props.view}</h3>}
        </>
    )
}
