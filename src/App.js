import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { CSVLink } from "react-csv"
import ModalForm from './Components/Modals/Modal'
import DataTable from './Components/Tables/DataTable'
import Header from './Components/Header'

function App() {
  const [items, setItems] = useState([]);
  const [displayQuote, setDisplayQuote] = useState('');
  const [displayAuthor, setDisplayAuthor] = useState('');

  const getItems = () => {
    fetch('http://localhost:3000/crud')
      .then(response => response.json())
      .then(items => setItems(items))
      .catch(err => console.log(err))

  }
  const getQuotes = () => {
    fetch('http://localhost:3000/crud/quote')
      .then(response => response.json())
      .then(quotes => formatQuote(quotes))
      .catch(err => console.log(err))

  }
  const formatQuote = (quotes) => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setDisplayAuthor(randomQuote.author)
    setDisplayQuote(randomQuote.quote)

  }
  const addItemToState = (item) => {
    setItems([...items,item])

  }
  const updateState = (item) => {
    const itemIndex = items.findIndex(data => data.id === item.id)
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
    setItems(newArray)

  }
  const deleteItemFromState = (id) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)

  }

  useEffect(() => {
    getQuotes()
    getItems()
  },  []);

  return (
    <div>
      <Header displayQuote={displayQuote} displayAuthor={displayAuthor}/>
      <Container className="App">
        <Row>
          <Col>
            <DataTable items={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={items}>
              Download CSV
            </CSVLink>
            <ModalForm buttonLabel="Add Item" addItemToState={addItemToState}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
