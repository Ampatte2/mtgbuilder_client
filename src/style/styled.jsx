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
    background-color:#2E1E2B;
    width:50vw;
    padding:2vh 2vw 2vh 2vw;
    left: 15.5vw;
    border: solid 2px #7A4419;
    border-radius: 10px;
    box-shadow:1px 1px 4px #2b4141;
`

const SearchFormInput = styled.input`
    border:none;
    padding:5px;
    margin:5px;
    border: solid 2px #7A4419;
    border-radius: 2px;
    &:focus{
        background-color:#2b4141;
    }
`
const SearchFormInputCheckbox = styled.input`
    padding:5px;
`
const SearchFormInputCheckboxLabel = styled.label`
    margin:10px;
`
const SearchFormInputCheckboxDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    font-size:20px;
`

const SearchFormLabel = styled.label`
    padding:5px;
    color:white;
`

const SearchFormButton = styled.button`
    border:none;
    background-color:#2B4141;
    padding:5px;
    color:white;
    border-radius:2px;
    &:hover{
        background-color:#34E4EA;
        color:black;
    }
`

//sidebar decklist items

const Decklist = styled.div`
    position: sticky;
    top:15vh;
    right:0;
    height:100vh;
    width:15vw;
    padding-top:2vh;
    background-color:#2E1E2B;
    border: solid 1px #7A4419;
    border-radius: 2px;
    box-shadow:1px 1px 4px #2b4141;
`
const DeckSelect = styled.div`
    position:sticky;
    top:10vh;
    right:0;
    height:6vh;
    width:15vw;
    margin-top:20vh;
    
`
const DeckSelectDrop = styled.div`
    position:sticky;
    top:10vh;
    right:0;
    height:15vh;
    background-color:white;
    width:15vw;
    z-index:1;
    overflow:scroll;
`

const DropInput = styled.input`
    border:none;
    
    
    &:focus{
        background-color:#2E1E2B;
    }
    &:hover{
        background-color:#2E1E2B;
    }
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
    background-color:#2E1E2B;
    list-style-type: none;
    margin:0;
    padding:10px;
    display:flex;
    align-items:center;
    margin-bottom:5vh;
    border-bottom:solid 1px #7A4419;
    border-top:solid 1px #7A4419;
    box-shadow:1px 1px 4px #2b4141;
    


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
    border:none;
    padding:10px;
    margin-top:2vh;
    &:focus{
        background-color:#2E1E2B;
    }
`
const AccountButton = styled.button`
    border:none;
    background-color:#2B4141;
    width:40%;
    margin-left:auto;
    margin-right:auto;
    border-radius:2px;
    &:hover{
        background-color:#34E4EA;
    }
`

const AccountError = styled.div`
    text-align:center;
    color:#ff4500;
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
        opacity:0.3;
        border:solid black 2px;
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
        border-radius: 20px;
        height:5px;
    }
    &&::-webkit-scrollbar-thumb{
        background:#2E1E2B;
        border:solid black 1px;
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
//deck

const Deck = styled.div`
    width:20vw;
    margin:5vh 2vw 5vh 2vw;
    font-size:1.5vh;
    height:55vh;
    text-align:center;
    background-color:transparent;
    border:none;
    padding:5px;

    
`

const DeckImage = styled.img`
    width:20vw;
    border-radius:10px;
    
    
`

//







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
    SearchFormInput,
    SearchFormButton,
    SearchFormLabel,
    SearchFormInputCheckbox,
    SearchFormInputCheckboxLabel,
    SearchFormInputCheckboxDiv,
    CardDisplay,
    Card,
    CardImage,
    CardButton,
    CardDescription,
    CardPopUp,
    CardInfo,
    CardInfoText,
    CardHeader,
    Deck,
    DeckImage,
    AccountForm,
    AccountInput,
    AccountButton,
    AccountError,
    DropInput
}

export default Styled