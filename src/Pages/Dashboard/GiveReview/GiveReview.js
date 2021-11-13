import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const GiveReview = () => {
    const { user } = useAuth();
    const { displayName } = user;
    const commentRef = useRef();
    const ratingsRef = useRef();

    const handleReviewSubmit = () => {
        let comment = commentRef?.current.value;
        let ratings = ratingsRef?.current.value;

        if (comment !== "") {
            fetch('https://immense-lake-11478.herokuapp.com/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ displayName, ratings, comment })
            })
                .then(res => res.json())
                .then(result => {
                })
            commentRef.current.value = "";
            ratingsRef.current.value = "";
            alert('Successfully added your review. Thank you for your review.');
        }
        else {
            alert("Please complete the comment field carefully!");
        }

    }


    return (
        <div style={{ fontFamily: "Roboto" }}>
            <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>Give A Review</h3>
            <form className="row g-2" style={{ border: "1px solid blue", padding: "30px" }}>
                <div className="col-12">
                    <label htmlFor="" className="form-label"> Your Name </label>
                    <input defaultValue={displayName} type="text" className="form-control" id="" required disabled />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label"> Your Ratings </label>
                    <input ref={ratingsRef} type="number" className="form-control" id="" placeholder="Enter rating between 0 to 5" required />
                </div>
                <div className="col-12">
                    <label htmlFor="" className="form-label">Your Comment: </label>
                    <textarea ref={commentRef} type="text" className="form-control" id="" placeholder="The product you get is...." required />
                </div>
                <div className="col-12">
                    <input style={{ width: "100%", backgroundColor: "gray", padding: "10px", marginTop: "10px", borderRadius: "5px" }} onClick={e => {
                        e.preventDefault();
                        handleReviewSubmit();
                    }} type="submit" value="Add Review" />
                </div>
            </form>
        </div>
    );
};

export default GiveReview;