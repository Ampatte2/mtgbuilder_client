import styled from "styled-components"
import {device} from "./device"
import Banner from "../images/Banner.jpg"
import MagicCardBack from "../images/MagicCardBack.jpg"

const AppDiv = styled.div`
    width:100vw;
    display:flex;
`
const DecklistDiv = styled.div`
    width:15vw;
`
const MainDiv = styled.div`
    width:85vw;
    margin-left:1vw;
`

//home

const SearchForm = styled.form`
    z-index:1;
    position:sticky;
    top:10vh;
    text-align:center;
    background-color:lightblue;
    width:50vw;
    padding:5vh 2vw 5vh 2vw;
    left: 15.5vw;
`

//sidebar decklist items

const Decklist = styled.div`
    position: sticky;
    top:15vh;
    right:0;
    height:100vh;
    width:15vw;
    padding-top:2vh;
    background-color:lightblue;
`
const DeckSelect = styled.div`
    position:sticky;
    top:10vh;
    right:0;
    height:6vh;
    width:15vw;
    margin-top:10vh;
    
`
const DeckSelectDrop = styled.div`
    position:sticky;
    top:15vh;
    right:0;
    height:15vh;
    background-color:white;
    width:15vw;
    z-index:1;
    overflow:scroll;
`
const SelectError = styled.div`
    position:sticky;
    top:25vh;
    right:0;
    height:10vh;
    width:15vw;
    z-index:2;
    color:red;
`
const CloneModal = styled.div`
    position:fixed;
    height:20vh;
    width:20vw;
    top:40vh;
    right:40vw;
`
//Banner

const BannerDiv = styled.div`
    height:30vh;
    width:102vw;
    background: url(${Banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    overflow:hidden;
`


//Navbar
const Navbar = styled.ul`
    position:sticky;
    z-index:9;
    top:0;
    height:5vh;
    width:100vw;
    background-color:lightblue;
    list-style-type: none;
    margin:0;
    padding:10px;
    display:flex;
    align-items:center;
    margin-bottom:5vh;
    


`
const UserButtons = styled.button`
    text-decoration: none;
    border:none;
    background-color:transparent;

`
const UserLogin = styled.div`
    display:flex;
    
    
`

//login and register
const AccountForm = styled.form`
    z-index:99;
    position:fixed;
    width:20vw;
    top:30vh;
    height:30vh;
    left:40vw;
    background-color:lightgrey;
    display:flex;
    border: solid grey 1px;
    padding:10px;
    border-radius: 5px;
    flex-direction:column;
    justify-content:space-between;
`
const AccountInput = styled.input`
    &:focus{
        background-color:lightblue;
    }
`
const AccountButton = styled.button`
    border:none;
    background-color:lightblue;
    &:hover{
        background-color:lightgreen;
    }
`

//cardDisplay

const CardDisplay = styled.div`
    display:flex;
    width:90vw;
    flex-wrap:wrap;
`
const Card = styled.div`
    width:20vw;
    margin:5vh 2vw 5vh 2vw;
    font-size:1.5vh;
    height:55vh;
    text-align:center;
    
    padding:5px;
    
    &:before{
        content:"";
        display:block;
        position:absolute;
        z-index:-1;
        width:22vw;
        height:55vh;
        background-image:url(${MagicCardBack});
        background-position: center;
        background-size:cover;
        opacity:0.4;
        border:solid darkblue 2px;
        border-radius:6px;
        
    }
    
`
const CardImage = styled.img`
    width:10vw;
    border-radius:10px;
    margin-left:5px;
    
`
const CardButton = styled.button`
    float:bottom;
`
const CardDescription = styled.div`
    overflow:scroll;
    text-align:left;
    height:15vh;
    width:22vw;
    margin-top:1vh;
    margin-left:5px;
    font-size:1.5em;
    text-shadow: 0.25px 0.25px;
    &&::-webkit-scrollbar{
        width:20px;
    }
    &&::-webkit-scrollbar-thumb{
        background: blue; 
        border-radius: 5px;
        height:10px;
    }
    &&::-webkit-scrollbar-thumb{
        background:blue;
    }
    &&::-webkit-scrollbar-corner{
        background:transparent;
    }
`
const CardPopUp = styled.img`
    z-index:5;
    position:fixed;
    width:20vw;
    top:10vh;
    left:30vw;
`
const CardInfo = styled.div`
    display:flex;
    flex-direction:row;
`
const CardInfoText= styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1vw;
    text-align:left;
    font-size:1.25em;
    text-shadow: 0.25px 0.25px;
    
    
`
const CardHeader = styled.h2`
    font-size:1.5em;
    text-shadow: 0.25px 0.25px;
`




const Styled = {
    Decklist,
    DeckSelect,
    DeckSelectDrop,
    SelectError,
    CloneModal,
    BannerDiv,
    Navbar,
    UserButtons,
    UserLogin,
    AppDiv,
    DecklistDiv,
    MainDiv,
    SearchForm,
    CardDisplay,
    Card,
    CardImage,
    CardButton,
    CardDescription,
    CardPopUp,
    CardInfo,
    CardInfoText,
    CardHeader,
    AccountForm,
    AccountInput,
    AccountButton
}

export default Styled