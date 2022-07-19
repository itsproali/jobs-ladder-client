import React from 'react';
import MakehrImpactfull from './MakeHrImpactfull/MakehrImpactfull';
import Testimonial from './Testimonial/Testimonial';
import TrustedBy from './TrustedBy/TrustedBy';

const Home = () => {
    return (
        <div>
           <TrustedBy/>
            <MakehrImpactfull />
            <Testimonial/>
        </div>
    );
};

export default Home;