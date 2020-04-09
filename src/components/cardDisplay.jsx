import React from 'react'
import {Modal} from "./index"
import Styled from "../style/styled"


export default function CardDisplay(props) {
    
    const dis = props.cardList
    
    return (
        <Styled.CardDisplay>
            {Object.keys(dis).length> 0 ? Object.values(dis).map((item, index)=>{
                        let typeDescription, addButton, deleteButton;

                        if(props.isAuth){
                            addButton = <Styled.CardButton onClick={(e)=>props.addMyCard(item,e)}>Add Card To Library</Styled.CardButton>
                        }

                        if(props.deleteCard){
                            deleteButton = <Styled.CardButton onClick={()=>props.deleteCard(item)}>Delete Card From Library</Styled.CardButton>
                        }

                        if(item["name"]==="No Cards Found"){
                            return <Styled.Card>
                                        <div key={index}>{item["name"]}</div>
                                        <img src={item.imageUrl} alt={item["name"]}  width="250px" height="250px"/>
                                    </Styled.Card>
                        }
                        else if(item.imageUrl){

                            if(item["types"][0]==="Creature"){

                                typeDescription = <><h3>Power {item["power"]}</h3><h3>Toughness {item["toughness"]}</h3></>
                                
                            }else if (item["types"][0]==="Planeswalker"){

                                typeDescription = <><h3>Loyalty {item["loyalty"]}</h3></>

                            }

                            return <Styled.Card>
                                    <Styled.CardHeader key={index}>{item["name"]}</Styled.CardHeader>
                                    <Styled.CardInfo>
                                    <Modal item={item}/>
                                    <Styled.CardInfoText>
                                    <h3>CMC {item["cmc"]}</h3>
                                    {typeDescription}
                                    <h3>{item["type"]}</h3>
                                    </Styled.CardInfoText>
                                    </Styled.CardInfo>
                                    <Styled.CardDescription>{item["text"]}</Styled.CardDescription>
                                    {addButton}
                                    {deleteButton}
                                    </Styled.Card>
                        }else{

                            if(item["types"][0]==="Creature"){

                                typeDescription = <><h3>Power {item["power"]}</h3><h3>Toughness {item["toughness"]}</h3></>

                            }else if (item["types"][0]==="Planeswalker"){

                                typeDescription = <><h3>Loyalty {item["loyalty"]}</h3></>

                            }
                            return <Styled.Card>

                            <Styled.CardHeader key={index}>{item["name"]}</Styled.CardHeader>
                            <Styled.CardInfo>
                            <Modal item={item}/>
                            <Styled.CardInfoText>
                            <h3>CMC {item["cmc"]}</h3>
                            {typeDescription}
                            <h3>{item["type"]}</h3>
                            </Styled.CardInfoText>
                            </Styled.CardInfo>
                            <Styled.CardDescription>{item["text"]}</Styled.CardDescription>
                            {addButton}
                            {deleteButton}
                            </Styled.Card>
                        }
                    }
        
            ): <div>{props.view}</div>}
        </Styled.CardDisplay>
    )
}
