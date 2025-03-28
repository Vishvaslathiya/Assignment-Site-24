import React from "react";
import maleImg from "../assets/male.jpg";
import femaleImg from "../assets/female.jpg";
import rightarrow from "../assets/rightarrow.svg";
import HeroImg2 from "../assets/heroimg2.jpg";
import HeroImg3 from "../assets/blurImg.jpg";
import heroImg4 from "../assets/HeroImg4.jpg";
import mainmentorImg from "../assets/mainImg.jpg";
import decorationImg from "../assets/decorationImg.svg";
import rightheroIcon from "../assets/righthero.svg";

const HeroSection = () => {
    return (
        <div className="Hero-Section  relative mt-[70px]">
            <div className="container mx-auto py-8 px-6 lg:py-16 lg:px-6">
                <div className="grid md:grid-cols-2 gap-8 justify-center items-center relative z-10	">
                    <div className="leftSection flex items-start flex-col">
                        <div className="flex flex-col items-center text-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
                            <div className="bg-prime rounded-full flex items-center py-2 px-4 mb-12">
                                <div className="hero-tagline-star px-3">*</div>
                                <div className="hero-tagline-text font-Helvetica font-normal text-base md:text-lg">
                                    Get started with Edulink
                                </div>
                                <div className="hero-tagline-star px-3">*</div>
                            </div>
                        </div>

                        <h1 className=" w-full md:w-11/12 text-5xl sm:text-4xl md:text-5xl lg:text-7xl	 font-semibold font-sora leading-tight">
                            Find suitable courses from the
                        </h1>

                        <div className="hero-title-wrap flex items-center font-sora pt-2 flex-wrap">
                            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
                                best
                            </h1>
                            <div className="hero-avatar-wrap w-32 border border-black flex rounded-full p-1 mx-4 mt-2">
                                <img
                                    src={maleImg}
                                    alt="Avatar 02"
                                    className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-[50%]"
                                />
                                <img
                                    src={femaleImg}
                                    alt="Avatar 01"
                                    className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-[50%] -ml-4"
                                />
                                <img
                                    src={rightarrow}
                                    alt="Arrow"
                                    className="w-8 h-8 sm:w-10 ml-2 sm:h-10 md:w-12 md:h-12 rounded-full"
                                />
                            </div>
                            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                                mentors
                            </h1>
                        </div>

                        <p className="mt-4 text-mainColor font-normal leading-snug text-start w-full md:w-5/6 text-sm md:text-base">
                            The good gathering doesn't bearing day stars over open behold may
                            male tree replenish don't blessed beast days earth fifth let
                            multiply and he every blessed.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-mainColor text-white py-3 px-4 rounded-xl mr-4 hover:bg-gray-800 text-sm sm:text-lg">
                                Start Learning
                            </button>
                            <button className="flex items-center text-mainColor font-normal	 text-sm sm:text-lg">
                                Watch Video
                                <span className="ml-2 inline-block pt-[4px]">
                                    <img src={rightheroIcon} />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="relative flex justify-center z-10	">
                        <div>
                            <img
                                src={mainmentorImg}
                                alt="Main Mentor"
                                className="MainMentorImg h-auto rounded-xl shadow-md w-[460px]"
                            />
                        </div>
                        <div className=" absolute right-8 top-[-2] md:right-16 md:-top-8 right-24 decoration  max-sm:hidden max-md:hidden">
                            <img src={decorationImg} alt="Main Mentor" className=" " />
                        </div>

                        <div className="absolute max-sm:hidden  -top-4 md:-top-8 -left-0 blur-sm   text-left-10  md:text-5xl lg:-left-14 ">
                            <img
                                src={HeroImg3}
                                alt="Small Mentor"
                                className="w-24 md:w-32 lg:w-40 rounded-lg shadow-lg opacity-50 "
                            />
                        </div>

                        <div className="absolute -bottom-4 md:-bottom-8  -right-4 max-md:hidden">
                            <img
                                src={HeroImg2}
                                alt="Small Mentor"
                                className="rounded-lg shadow-lg opacity-50"
                            />
                        </div>

                        <div
                            className="absolute -bottom-4 md:-bottom-8 left-4 md:-left-4 bg-prime p-4 rounded-lg bg-secondary-3 items-center space-x-2"
                            style={{ boxShadow: "8px 6px 0 0 #ffbcbc" }}
                        >
                            <div className="flex flex-col items-start space-y-2 pb-2 ">
                                <h2 className="text-sm md:text-xl font-semibold">
                                    UI Design Pattern
                                </h2>
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={heroImg4}
                                            alt="Avatar"
                                            className="w-12 h-12 sm:w-12 sm:h-12 rounded-[50%]"
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-lg font-normal font-Helvetica">
                                                Dennis Barrett
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/65003a8c2f57fbf71081e4c4_file.svg"
                                                    alt="File"
                                                    className="w-3 h-3"
                                                />
                                                <div className="text-xs text-mainColor">123 Courses</div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1"></div>
        </div>
    );
};

export default HeroSection;

// lg:gap-x-80
