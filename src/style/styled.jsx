import styled from "styled-components"
import {device} from "./device"
import Banner from "../images/Banner.jpg"
import MagicCardBack from "../images/MagicCardBack.jpg"

const AppDiv = styled.div`
    width:100%;
    display:flex;
`
const DecklistDiv = styled.div`
    width:14%;
`
const MainDiv = styled.div`
    width:84%;
    
`

//home

const SearchForm = styled.form`
    z-index:1;
    position:sticky;
    top:6vh;
    text-align:center;
    background-color:#F8F8F8;
    width:50vw;
    padding:1vh 2vw 1vh 2vw;
    left: 15.5vw;
    border: solid 1px #E7E7E7;
    border-radius: 10px;
    box-shadow:1px 1px 4px #2b4141;
`

const SearchFormInput = styled.input`
    border:none;
    padding:5px;
    margin:5px;
    border: solid 1px #E7E7E7;
    border-radius: 2px;
    &:focus{
        background-color:#2b4141;
    }
`

const StyledCheckbox = styled.div`
    display:inline-block;
    width:16px;
    height:16px;
    background:${props => props.checked ? props.color : "white"};
    border-radius:3px;
    border:solid black 0.5px;
    transition: all 150ms;
    vertical-align:center;
    
`

const CheckboxContainer = styled.div`
    display:flex;
    flex-direction:row;
    
    
`
const CheckBoxLabel = styled.div`
    margin-right:10px;
    font-size:20px;
    vertical-align:center;
`
const SearchFormInputCheckboxDiv = styled.div`
    display:flex;
    flex-direction:row;
    height:2vh;
    padding:1vh 1vw 1vh 1vw;
    width:30vw;
    margin:2vh auto 2vh auto;
    justify-content:space-between;
    border: solid 2px #E7E7E7;
    border-radius: 2px;

    font-size:medium;
`
const Icon = styled.svg`
    fill:none;
    stroke:darkgrey;
    stroke-width:2px;
    visibility: ${props=> props.checked ? "visible" : "hidden"}
`

const SearchFormLabel = styled.label`
    padding:5px;
    font-size:20px;
    color:black;
`

const SearchFormButton = styled.button`
    border:none;
    background-color:#2B4141;
    padding:7px;
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
    background-color:white;
    border: solid 1px #7A4419;
    border-radius: 2px;
    box-shadow:1px 1px 4px #2b4141;
    
`

const DecklistItem = styled.div`
    background-color:red;
    width:15vw;
    display:flex;
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
    
    
    &:focus{DecklistItem
        background-color:white;
    }
`

const SelectError = styled.div`
    position:sticky;
    top:25vh;
    right:0;
    height:10vh;
    width:15vw;
    z-index:2;
    
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
    background: url(${Banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    overflow:hidden;
`


//Navbar
const Navbar = styled.div`
    position:sticky;
    z-index:9;
    top:0; 
    height:5vh;
    background-color:#F8F8F8;
    list-style-type: none;
    margin:auto;
    
    display:flex;
    box-shadow:1px 1px 4px #2b4141;
    align-items:center;
    margin-bottom:5vh;
    border-bottom:solid 2px #E7E7E7;
    border-top:solid 2px #E7E7E7;
    overflow:hidden;
    justify-content:space-between;
    
    


`
const UserButtons = styled.button`
    text-decoration: none;
    border:none;
    background-color:transparent;
    color:#777;
    outline: none;
    font-size:2vh;
    &:hover{
        color:#333;
        cursor:pointer;
    }
    &:focus{
        color:#34E4EA;
    }

`
const UserLogin = styled.div`
    display:flex;
    align-items:center;
    height:5vh;
`
const UserLoginDiv = styled.div`
    
    height:5vh;
    margin-right:1vw;
    
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
        background-color:white;
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
    width:12vw;
    height:33vh;
    border-radius:10px;
    margin-left:5px;
    
    
`
const CardButton = styled.button`
    border:none;
    background-color:#2B4141;
    padding:5px;
    color:white;
    border-radius:4px;
    &:hover{
        background-color:#34E4EA;
        color:black;
    }
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
        background:white;
        border:solid black 1px;
    }
    &&::-webkit-scrollbar-corner{
        background:transparent;
    }
`
const CardPopUp = styled.img`
    z-index:10;
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
    width:7.5vw;
    
    
`
const CardHeader = styled.div`
    font-size:1.5em;
    text-shadow: 0.25px 0.25px;
`
const CardHeader2 = styled.div`
    font-size:1.25em;
    text-shadow: 0.25px 0.25px;
    margin-top:3vh;
`
const CardEmpty = styled.div`
    font-size:2em;
    margin:auto;
    margin-top:10vh;
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
const DeckHeader = styled.div`
    width:20vw;
    background-color:#F8F8F8;
    font-size:2em;
    border: solid 2px #E7E7E7;
    border-radius: 5px;
    margin-bottom:1vh;
    color:black;
`
//







const Styled = {
    Decklist,
    DecklistItem,
    DeckSelect,
    DeckSelectDrop,
    SelectError,
    CloneModal,
    BannerDiv,
    Navbar,
    UserButtons,
    UserLogin,
    UserLoginDiv,
    AppDiv,
    DecklistDiv,
    MainDiv,
    SearchForm,
    SearchFormInput,
    SearchFormButton,
    SearchFormLabel,
    StyledCheckbox,
    CheckboxContainer,
    CheckBoxLabel,
    Icon,
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
    CardHeader2,
    CardEmpty,
    Deck,
    DeckImage,
    DeckHeader,
    AccountForm,
    AccountInput,
    AccountButton,
    AccountError,
    DropInput
}

export default Styled