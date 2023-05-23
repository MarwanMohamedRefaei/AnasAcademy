import React from "react";
import { Link, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const UniversityDetails = () => {
    // get the product id from url
    let location = useLocation()
    console.log(`location`, location)


    //get the single product based on id

    const university = location.state.university;

    // if product is not found
    if (!university) {
        return (
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        );
    }

    // destructure product
    const { country, name, web_pages } = university;
    return (
        <section className=" relative h-screen flex flex-row justify-center items-center">
            <Link to={`/`} className="absolute top-10 left-10 mr-10">
                <AiOutlineArrowLeft size={30}  />
            </Link>
            <div className="flex flex-col w-max gap-4 items-center ">
                <div className="flex w-[300px]  justify-center items-center mb-8 lg:mb-0">
                    <img className="max-w-[200px] lg:max-w-xs" src={`/Assets/Images/universityImage.png`} alt="" />
                </div>
                <div className=" text-center ">
                    <h1 className="text-[26px] text-gray-500 font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{country}</h1>
                    <div className="text-2xl text-black font-medium mb-6">{name}</div>
                    <a href={web_pages} rel="noreferrer" target="_blank" className="underline animate-pulse mb-8">{web_pages}</a>
                </div>
            </div>
        </section>
    );
};

export default UniversityDetails;
