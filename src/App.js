import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modals/Modal'
import DataTable from './Components/Tables/DataTable'
import { CSVLink } from "react-csv"

class App extends Component {
  state = {
    items: [],
    quotes: [],
    displayQuote: '',
    displayAuthor: ''
  }

  getItems(){
    fetch('http://localhost:3000/crud')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }

  getQuote(){
    fetch('http://localhost:3000/crud/quote')
      .then(response => response.json())
      .then(quotes => this.setState({quotes}))
      .then(() => this.formatQuote(this.state.quotes))
      .catch(err => console.log(err))
  }

  formatQuote(quotes){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    this.setState({displayAuthor: randomQuote.author})
    this.setState({displayQuote: randomQuote.quote})
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
      ...this.state.items.slice(0, itemIndex),
      item,
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
    this.getQuote()
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0", textAlign: "center"}}>Lives Lived</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 style={{margin: "20px 0", textAlign: "center"}}><i>{this.state.displayQuote}</i><br/>- {this.state.displayAuthor}</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={this.state.items}>
              Download CSV
            </CSVLink>
            <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
