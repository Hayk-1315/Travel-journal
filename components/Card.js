import React from "react"

export default function Card(props) {
  
    return (
        <div className="card">
               <img src={`../Images/${props.item.img}`} className="card--image" />
               <div className="card--body">
                  <div className="card--Maps">
                      <img src="../Images/Maps.png" className="card--img" />
                      <h3>{props.item.location}</h3>
                      <p><a href={props.item.googleMapsUrl} target="_blank">View on Google Map</a></p>
                  </div>
                  <h2>{props.item.title}</h2>
                  <div className="card--Date">
                       <h4>{props.item.startDate}</h4>
                       <p>_</p>
                       <h4>{props.item.endDate}</h4>   
                  </div>
                  <p>{props.item.description}</p>
              </div> 
                 
        </div>
        )
        
}