import React from 'react'
import styled from 'styled-components'
import image from '../Images/mtns-background.jpg'

function Header(props) {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Heading>Lives<br/><i>Lived</i></Heading>
      </HeaderContainer>
      <Quote><i>{props.displayQuote}</i><br/>- {props.displayAuthor}</Quote>
    </HeaderSection>
  )
}

const HeaderSection = styled.section`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height:100vh;
`

const HeaderContainer = styled.div`
    position: relative;
    width 600px;
    height: 800px;
`

const Heading = styled.h1`
    color: white;
    font-family: garamond;
    padding: 80px;
    text-align: center;
    position: absolute;
    bottom: 400px;
    font-size: 80px;
    text-shadow: 0 0 53px #000;
`

const Quote = styled.h4`
    color: white;
    font-family: garamond;
    font-weight: bold;
    margin: auto;
    text-align: right;
    padding: 0px 0px 0px 100px;
    position: absolute;
    right: 20px;
    bottom: 50px;
    text-shadow: 1px 1px 8px #000;
`

export default Header