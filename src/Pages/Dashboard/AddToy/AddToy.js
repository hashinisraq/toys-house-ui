import React, { useRef } from 'react';

const AddToy = () => {
    const nameRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const detailsRef = useRef();

    const handleToySubmit = () => {
        let name = nameRef?.current.value;
        let img = imgRef?.current.value;
        let price = priceRef?.current.value;
        let details = detailsRef?.current.value;

        if (name && img && price && details !== "") {
            fetch('https://immense-lake-11478.herokuapp.com/toys', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name, img, price, details })
            })
                .then(res => res.json())
                .then(result => {
                })
            nameRef.current.value = "";
            imgRef.current.value = "";
            priceRef.current.value = "";
            detailsRef.current.value = "";
            alert('Successfully added the toy.');
        }
        else {
            alert("Please complete all the fields carefully!");
        }

    }

    return (
        <div style={{ fontFamily: "Roboto" }}>
            <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>Add A Toy</h3>
            <form className="row g-2" style={{ border: "1px solid blue", padding: "30px" }}>
                <div className="col-12">
                    <label htmlFor="" className="form-label"> Toy Name </label>
                    <input ref={nameRef} type="text" className="form-control" id="" required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label"> Image url </label>
                    <input ref={imgRef} type="text" className="form-control" id="" placeholder="https://ibb.co/kaske" required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label"> Price </label>
                    <input ref={priceRef} type="text" className="form-control" id="" placeholder="1200 Taka" required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label"> Description </label>
                    <textarea ref={detailsRef} type="text" className="form-control" id="" placeholder="The product you get is...." required />
                </div>
                <div className="col-12">
                    <input style={{ width: "100%", backgroundColor: "gray", padding: "10px", marginTop: "10px", borderRadius: "5px" }} onClick={e => {
                        e.preventDefault();
                        handleToySubmit();
                    }} type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;