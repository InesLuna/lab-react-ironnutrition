import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import TodayFood from './components/TodayFood';

class App extends Component {

  state = {
    foods,
    showFoods: foods,
    todayFoods: [], 
    showFoodAdd : false,
    todayFoods: []
  }
 

  showAddForm = () =>{
    console.log(this.state.showFoodAdd)
    this.setState({showFoodAdd: !this.state.showFoodAdd})
  }

  addFoodHandler = theFood => {
    foods.push(theFood);
    this.setState({
      showFoods: foods
    });
  };
  

  searchBar = (event) => {
      let { value } = event.target;
      const aux = [...foods];
      let newFoodList = aux.filter(food => food.name.toLowerCase().includes(value.toLowerCase()))
      this.setState({showFoods: newFoodList});
  }
  
  addTodayFoodHandler = theFood => {
    const newToday = this.state.todayFoods
    console.log(theFood)
    newToday.push(theFood);
    this.setState({
      todayFoods: newToday
    });
  };
  

  render() {
    const {showFoodAdd} = this.state
  
    return (
      <div className="App">
      <header>
        <input type="text" placeholder="Search.." name='name' onChange = {e=>this.searchBar(e)}></input>
        <button onClick = {() => this.showAddForm()}>
          Add Food
        </button>
        {showFoodAdd ? <AddFood addTheFood={this.addFoodHandler}/> : null}
      </header>
      <div className='foods'>
      <section className='foodList'>
        {
          this.state.showFoods.map((food,index)=> {
            return <FoodBox key={index} food={food} today={this.addTodayFoodHandler}/>
          })
        }
      </section>
      <section className='todayFoodList'>
        <h1><strong>Today Foods</strong></h1>
          {this.state.todayFoods ?
            this.state.todayFoods.map((food, index)=>{
              return <TodayFood key={index} food={food}/>
            }) : null
          }
        
      </section>
      </div>
       
      </div>
    );
  }
}

export default App;
