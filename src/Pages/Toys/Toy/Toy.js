import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id, name, price, details, img } = toy;
    return (
        <div className="col">
            <div className="card h-100">
                <div>
                <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Description: {details}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>Price: {price}</h5>
                        <Link to={`/addToCart/${_id}`} ><Button variant="dark">Add To Cart</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toy;