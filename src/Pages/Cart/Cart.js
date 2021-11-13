import React, { useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useToys from '../../hooks/useToys';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Cart = () => {
    const { toyId } = useParams();
    const { user } = useAuth();
    const [toys] = useToys();
    const phoneRef = useRef();
    const addressRef = useRef();

    const selectedToy = toys.filter(toy => toy._id === toyId);
    console.log(selectedToy);
    const { displayName, email } = user;
    const _id = selectedToy[0]?._id;
    const toyName = selectedToy[0]?.name;
    const price = selectedToy[0]?.price;
    const details = selectedToy[0]?.details;

    const handleBooking = () => {
        const status = 'pending';
        let phone = phoneRef?.current.value;
        let address = addressRef?.current.value;

        if (phone !== "" && address !== "") {
            fetch('https://immense-lake-11478.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ _id, displayName, email, toyName, price, phone, details, address, status })
            })
                .then(res => res.json())
                .then(result => {
                })
            phoneRef.current.value = "";
            addressRef.current.value = "";
            alert('Successfully placed your order. We will confrim your booking soon.');
        }
        else {
            alert("Please complete all the fields carefully!");
        }

    }

    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <Header />
            <div style={{ padding: "80px", backgroundColor: 'rgb(69, 155, 129)' }}>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}><u>Toy Purchase Confirmation</u></h3>
                <form className="row g-2" style={{ border: "1px solid blue", padding: "30px" }}>
                    <div className="col-12">
                        <label htmlFor="" className="form-label"> Your Name </label>
                        <input defaultValue={displayName} type="text" className="form-control" id="" required disabled />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Your Email </label>
                        <input defaultValue={email} type="text" className="form-control" id="" required disabled />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Your Phone: </label>
                        <input ref={phoneRef} type="number" className="form-control" id="" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Your Address: </label>
                        <textarea ref={addressRef} type="text" className="form-control" id="" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Toy Name: </label>
                        <input defaultValue={toyName} type="name" className="form-control" id="inputEmail4" required disabled />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Price: </label>
                        <input defaultValue={price} type="text" className="form-control" id="" required disabled />
                    </div>
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Description: </label>
                        <textarea defaultValue={details} type="text" className="form-control" id="" required disabled />
                    </div>
                    <div className="col-12">
                        <input style={{ width: "100%", backgroundColor: "gray", padding: "10px", marginTop: "10px", borderRadius: "5px" }} onClick={e => {
                            e.preventDefault();
                            handleBooking();
                        }} type="submit" value="Place Order" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;