import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
  return (
    <div className="col-md-4 col-sm-12 col-lg-4 d-flex justify-content-center">
      <div id="card" className="card">
        <img src={props.image} className="card-img-top" alt="Placeholder here "></img>
        <div className="card-body">
          <span>{props.id}</span>
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
