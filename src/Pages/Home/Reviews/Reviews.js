import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://immense-lake-11478.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Roboto', padding: '80px 0', backgroundColor: 'rgb(69, 155, 129)' }}>
            <h2 className="pb-5">Reviews</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: "10px 40px" }}>
                {
                    reviews.map(review => <div key={review._id} className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-text">{review.comment}</h5>

                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6><small>Review By</small> {review.displayName}</h6>
                                    <h6><small>Ratings: {review.ratings} (out off 5)</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;