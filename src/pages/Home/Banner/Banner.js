import React from 'react';
import heroimg from "../../../asset/illustrations1 2.png";
const Banner = () => {
    return (
        <section className='banner py-16'>
            <div className='container mx-auto '>
                <div className='grid lg:grid-cols-2 px-5 gap-x-2.5 lg:text-left md:text-left sm:text-left text-center'>
                    <div className='banner-content content-center grid'>
                        <h1 className='text-text-main-color lg:text-5xl md:text-3xl sm:text-3xl text-3xl font-bold'>The smart HR software for growing businesses</h1>
                        <p className='text-text-secendory-color lg:text-lg md:text-base text-base font-normal pt-5'>Modernize your HR. Manage your hiring, onboarding, time-off, employee data, and HR workflows in one place.</p>
                        <div className='mt-5'><a className='btn btn-outline text-primary px-8 lg:text-base text-sm font-normal'  href='/' >Explore us</a></div>
                    </div>
                    <div className='banner-image-wrapper lg:pt-0 md:pt-0 sm:pt-0 pt-10'>
                        <img src={heroimg} alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;