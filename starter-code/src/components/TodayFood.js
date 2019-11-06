import React from 'react'

export default function TodayFood(props) {
    const{food} = props;
    return (
        <div>
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                     <p>{food.quantity} <strong>{food.name}</strong> <small>{food.calories}</small>
                    </p> 
                  </div>
                </div>
              </article>
            </div>
        </div>
    )
}
