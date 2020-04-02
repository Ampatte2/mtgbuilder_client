import styled from "styled-components"
import {device} from "./device"

const Decklist = styled.div`
    position: fixed;
    top:25vh;
    right:0;
    height:100vh;
    width:15vw;
    padding-top:2vh;
    background-color:lightblue;
`
const DeckSelect = styled.form`
    position:fixed;
    top:20vh;
    right:0;
    height:15vh;
    width:15vw;
    background-color:blue;
`
const DeckSelectDrop = styled.div`
    position:fixed;
    top:22vh;
    right:0;
    height:15vh;
    background-color:white;
    width:15vw;
    z-index:1;
    overflow:scroll;
`
const SelectError = styled.div`
    position:fixed;
    top:25vh;
    right:0;
    height:10vh;
    width:15vw;
    z-index:2;
    color:red;
`

const Styled = {
    Decklist,
    DeckSelect,
    DeckSelectDrop,
    SelectError
}

export default Styled