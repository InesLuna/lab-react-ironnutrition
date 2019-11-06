import React, { Component } from 'react';
import TodayFood from './TodayFood'

export default class FoodBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      props,
      newFood: {name: '',
      calories: '',
      quantity: 0},
    }
  }

  handleChange(event) {
    let { value } = event.target;
    this.setState({
      newFood: {name: this.state.props.food.name,
      calories: this.state.props.food.calories,
      quantity: value}
    });
  };


/* addTodayFoodHandler = theFood => {
  const newToday = this.state.todayFoods
  newToday.push(theFood);
  this.setState({
    todayFoods: newToday
  });
}; */
  render() {
    
    return (
      <div>
        <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={this.props.food.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{this.props.food.name}</strong> <br />
                      <small>{this.props.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="number" 
                        name='quantity'
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info" onClick={()=>{this.props.today(this.state.newFood)}}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                {/* <h1><strong>Today Foods</strong></h1>
                  {this.todayFoods ?
                    this.todayFoods.map((food, index)=>{
                      return <TodayFood key={index} food={food}/>
                    }) : null
                  } */}
              </article>
            </div>
      </div>
    )
  }
}

