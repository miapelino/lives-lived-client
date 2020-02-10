import React from 'react'
import styled from 'styled-components'
import image from '../Images/mtns-background.jpg'

function Header(props) {
  return (
    <HeaderSection>
      <Border>
        <Heading><i>Lives</i> Lived</Heading>
        <Quote><i>{props.displayQuote}</i><br/>- {props.displayAuthor}</Quote>
      </Border>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
    background:
    linear-gradient(to top, white, transparent 5%),
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19,93,0.73)), url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 105vh;
`
const Border = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 93%;
    height: 93vh;
    border: 3px solid white;
    display: flex;
`

const Heading = styled.h1`
    color: white;
    font-family: luminari;
    font-weight: 900;
    font-size: 90px;
    text-align: center;
    width: 100%;
    margin: 20% 5%;
`

const QuoteArea = styled.div`
    color: white;
    font-family: garamond;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    position: absolute;
    right: 7%;
    bottom: 10%;
`

const Quote = styled.p`
    margin: 0 0 0 3%;
    text-shadow: 0 0 1px white;
    text-align: right;
    flex: 1 1 auto;
    width: 100%;
`

const Author = styled.p`
    margin: auto;
    text-shadow: 0 0 1px white;
    text-align: right;
    flex: 1 1 auto;
    width: 100%;
`

export default Header