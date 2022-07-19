import React from 'react';
import MakehrImpactfull from './MakeHrImpactfull/MakehrImpactfull';
import Testimonial from './Testimonial/Testimonial';
import TrustedBy from './TrustedBy/TrustedBy';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrustedBy />
            <MakehrImpactfull />
            <Testimonial />
        </div>
    );
};

export default Home;