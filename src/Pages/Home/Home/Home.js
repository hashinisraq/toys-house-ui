import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import SelectedToys from '../SelectedToys/SelectedToys';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <Header />
            <Banner />
            <SelectedToys />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;