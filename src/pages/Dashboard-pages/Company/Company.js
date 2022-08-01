import React from "react";
import image1 from "../../../asset/company.jpg";
import "./Company.css";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import miami from "../../../asset/miami.jpg"
import 'react-tabs/style/react-tabs.css';
import people from "../../../asset/testimonial/client-3.png"
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


                {/* about tab panel */}
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

                {/* jobs tab panel */}
                <TabPanel>

                    <div class=" w-96 rounded  align-middle p-4 shadow-lg shadow-blue-500/50 hover:bg-white-700 border	mb-3">
                        <figure> <img className="h-60 w-96 rounded" src={miami} alt="" /></figure>
                        <div class="">
                            <h1 class="text-xl font-bold">Mern Stack Developer</h1>
                            <p className="font-bold ">Miami and Drive Way</p>
                            <div class=" justify-end">
                                <span><small className="font-light">1 day ago</small></span>
                            </div>
                        </div>
                    </div>

                </TabPanel>

                {/* people tab panel */}
                <TabPanel>
                    <div class=" w-96 rounded text-center  p-4 shadow-lg shadow-blue-500/50 hover:bg-white-700 border mb-3">
                        <div class="avatar ">
                            <div class="w-24 rounded-full">
                                <img src={people} />
                            </div>
                        </div>
                        <div class="">
                            <h3 class="text-xl font-bold">Job's Ladder Limited</h3>
                            <div class=" justify-end">
                                <span><small className="font-light">Actively looking for Full-time opportunities.</small></span>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Company;
