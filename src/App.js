import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ Monsters: users });
      })
      .catch((err) => console.log(err));
  }

  handleStateChange = (event)=> {

    const searchField = event.target.value.toLowerCase();
    this.setState({searchField: searchField})
  }


  render() {
    const filtered = this.state.Monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField)
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monster"
          onChange={this.handleStateChange}
        />
        <CardList FilteredMonsters={filtered} />
      </div>
    );
  }
}

export default App;
