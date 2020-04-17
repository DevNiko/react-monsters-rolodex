import React, { Component } from "react"
import "./App.css"
import { CardList } from "./component/card-list/card-list.component"
import { SearchBox } from "./component/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: "",
    }

    this.searchFilter = ""
  }

  /**
   * Some fake data
   */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  searchChange = (e) => {
    this.searchFilter = e.target.value
    this.setState((prevState, prevProps) => {
      return { searchField: this.searchFilter }
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search Monsters" handleChange={this.searchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
export default App
