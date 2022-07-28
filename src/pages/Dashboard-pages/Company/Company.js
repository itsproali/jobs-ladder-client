import React from 'react';
import image1 from '../../../asset/company.jpg'
import './Company.css'
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Company = () => {
    return (

        <>

            <div className="  bg-base-100 ">
                <figure><img className='h-96 cover-img' src={image1} alt="Shoes" /></figure>
                <div className="text-4xl p-3  ">
                    Miami HEAT
                </div>
                <div className='p-3'>
                    <button className="btn btn-outline ">Visit website <HiExternalLink className='text-2xl ml-1' /></button>

                </div>


            </div>

            <Tabs className="tab-customize">
                <TabList>
                <Tab>About</Tab>
                <Tab>jobs</Tab>
                <Tab>People</Tab>
                </TabList>

                <TabPanel>
                <h2 className='text-xl font-semibold'>Overview</h2>
                <div>
                <p className='text-lg pt-5'>
                Nordstone is a global software consultancy headquartered in London. We are a team of world-class developers, designers, product strategists and growth hackers. Together we have built 100+ products on mobile, web and on the blockchain.

                Nordstone’s CEO has a professional background in Banking and several years ago he took the leap of faith and stepped out of the corporate world to launch his first venture - the UK’s first mobile app combating loneliness and scaled the product to 70+ countries. He now leads Nordstone, a global software consultancy, partnering with entrepreneurs and businesses to turn their visions into reality.

                We are not your ordinary consultancy. Nordstone is built by experienced people who have been on the other side of the table. We treat every project as if it was our own, from startup ventures to enterprise brands.
                </p>
                </div>
                <div className='pt-10'>
                <h2 className='text-lg font-bold pb-5'>Specialties</h2>
                Mobile App Development, iOS, Android, UI/UX Designs, Product Market Fit, In-App Purchases, Backend Development, Machine Learning, APIs, Google Play Store, Apple App Store, Frontend Development, Blockchain, NFTs, Web Development, and Database Structuring
                </div>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </>



    );
};

export default Company;