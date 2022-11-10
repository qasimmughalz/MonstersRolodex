import {Component} from 'react'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      Monsters: [], 
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>  res.json())
    .then((users)=> {
      this.setState( {Monsters : users} )
    })
    .catch((err)=> console.log(err))
  }

  render(){

    const filtered = this.state.Monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.searchField)) 
    return (
        
      <div className="App">
        <input placeholder='Search Monster' 
          onChange={(eve) =>  {
          this.setState( ()=> {
            return {
                searchField: eve.target.value
            }
          }) }
        }  
           />

        {filtered.map((users =>{
          return <h1 key={users.id}>{users.name}</h1>
        }))}
      </div>
    );
  }

}

export default App;
