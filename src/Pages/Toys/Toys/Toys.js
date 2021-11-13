import React from 'react';
import useToys from '../../../hooks/useToys';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Toy from '../Toy/Toy';

const Toys = () => {
    const [toys] = useToys();
    return (
        <>
            <Header />
            <div style={{ textAlign: 'center', fontFamily: 'Roboto', padding: '80px 0', backgroundColor: 'rgb(58, 93, 127)' }}>
                <h2>Available Toys: {toys.length}</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: "10px 40px" }}>
                    {
                        toys.map(toy => <Toy
                            key={toy._id}
                            toy={toy}
                        ></Toy>)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Toys;