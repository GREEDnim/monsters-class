// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import CardList from './components/card-list/cardlist.component';
import SearchBox from './components/search-box/searchbox.component';
class App extends Component
{
 constructor()
  {
    super();
    this.state=
    {
      monsters:[],
      currenttext:"",
    }
    
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(  (response)=>response.json() )
    .then((array)=> { this.setState( {monsters:array}  )   })
    
  }
  onSearchChange=(event)=>
  {
     let text=event.target.value.toLocaleLowerCase();
  
    this.setState(()=>{ return {currenttext:text}})

}


  
  render()
  {
    
    let currentmonsters=this.state.monsters.filter((monster)=>monster.name.toLocaleLowerCase().includes(this.state.currenttext) ) ;
    
    return ( 
      
      <div className="App">
        <h1 className='app-title'>MONSTERS ROLODEX</h1>
          <SearchBox placeholder='search monsters'  className='search-box' onChange={this.onSearchChange}></SearchBox>
          <CardList monsters={currentmonsters}></CardList> 
        

      
  </div>
  
  )

  
  }


}


export default App;
