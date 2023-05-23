import React from "react";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";


const UniversityCard = ({ university }) => {

    // destructure product
    const { country, name, web_pages } = university;
    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                {/* image */}
                <Link to={`/university`} state={{ university: university }} className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center cursor-pointer">
                        <img
                            className="max-h-[160px] group-hover:scale-110 transition duration-300"
                            src={'/Assets/Images/universityImage.png'}
                            alt=""
                        />
                    </div>
                </Link>
                <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                        to={`/university`} state={{ university: university }}
                        className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                    >
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-start">
                <div className="text-lg font-bold capitalize text-gray-500 mb-1">{country}</div>
                <h2 className="font-semibold mb-1 text-start">{name}</h2>
                <div className="flex flex-row gap-4">
                    <a href={web_pages} target="_blank" rel="noreferrer" className="underline animate-pulse font-semibbold">{web_pages}</a>
                </div>
            </div>
        </div>
    );
};

export default UniversityCard;
