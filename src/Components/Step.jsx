import React from 'react';
import checkImg from '../assets/check.svg';
import maleImg from '../assets/step-11.jpg';
import edulikImg from '../assets/EDULINK.svg';
import financeImg from '../assets/financeImg.svg';
import designImg from '../assets/designImg.svg';

const Step = () => {
    return (    
        <div className="step-section py-10 lg:py-16 mt-10">
            <div className="container mx-auto px-6  ">
                <div className="grid grid-cols-1 lg:grid-cols-2  relative items-center grid-step">
                    {/* Left Side Image with Overlays */}
                        <div className="relative rounded-full overflow-hidden mr-[50px] text-5xl sm:text-4xl md:mr-[40px] lg:mr-[40px] " style={{boxShadow:'9px 5px 0 0 black'}} >
                            <img
                                src={maleImg}
                                alt="About 01"
                                className="w-full h-auto step-image" 
                            />
                        </div>

                        {/* Congrats Message */}
                        <div className="absolute top-4  right-4 sm:left-[29%] bg-white shadow-lg rounded-lg p-3 sm:p-4 w-36 sm:w-48 text-center">
                            <img
                                src={checkImg}
                                alt="Checkmark Icon"
                                className="mx-auto w-6 sm:w-8 h-6 sm:h-8"
                            />
                            <h4 className="text-lg sm:text-xl font-semibold mt-2 font-sora pb-2">Congrats!!</h4>
                            <p className="text-mainColor text-xs sm:text-sm">Your profile was done successfully</p>
                        </div>

                        {/* Create Account Section */}
                        <div className="absolute bottom-[-2rem]  edImg lg:left-[20%]    sm:right-[2rem] bg-white shadow-lg rounded-lg p-3 sm:p-4 w-48 sm:w-64 text-center">
                            <img
                                src={edulikImg}
                                alt=" Logo"
                                className="mx-auto w-20 sm:w-28 h-auto"
                            />
                            <h5 className="text-primary-1 text-lg sm:text-xl font-sora font-semibold mt-2">
                                Online course platform
                            </h5>
                            <p className="text-mainColor text-xs mt-2">
                                Departure defective arranging rapturous did believe him all had supported.
                            </p>
                            <a
                                href="/user-pages/sign-up"
                                className="bg-black text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg mt-4 inline-block"
                            >
                                Create Account
                            </a>
                        </div>

                        <div className=" absolute financeImg top-[auto] bottom-[45px] left-[-24px] right-[auto] object-cover	  ">
                            <img src={financeImg} alt="Finance Icon" />
                        </div>
                        <div className="inline-block top-[36%]  left-[auto] right-[56%] object-cover absolute">
                            <img src={designImg} alt="Design Icon" className='designIcon' />
                        </div>

                    {/* Right Side: Steps */}
                    <div className="space-y-8 ">
                        <div className="mb-4 sm:mb-8">
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold font-sora mt-8 ">
                                How it works in 3 simple steps
                            </h2>
                        </div>
                        <div className="space-y-4 sm:space-y-6 grid gap-y-2.5 ">
                            <div className="flex items-start space-x-3 sm:space-x-4 bg-[#e1e3f6] rounded-lg p-3 sm:p-5 shadow-md w-full lg:w-10/12 w-[80%]" style={{ boxShadow: '9px 5px 0 0 #c4c8ee' }}>
                                <div className="w-10 sm:w-16 md:w-20 h-10 sm:h-12 flex justify-center items-center bg-white rounded-full shadow">
                                    <img
                                        src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/658975fb4c3ee93f91357ef7_search%201.svg"
                                        alt="Search Icon"
                                        className="w-5 sm:w-6 h-5 sm:h-6"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-2xl font-semibold mb-2">Browse our courses</h3>
                                    <p className="text-mainColor text-sm sm:text-base">
                                        Annoying consequences, or one who avoids a pain that produces no resultant pleasure.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 sm:space-x-4 bg-[#c4dac8] w-[80%] rounded-lg p-3 sm:p-5 shadow-md w-full lg:w-9/12  " style={{ boxShadow: '9px 5px 0 0 #89b592',marginLeft:'auto' }}>
                                <div className="w-10 sm:w-16 md:w-20 h-10 sm:h-12 flex justify-center items-center bg-white rounded-full shadow">
                                    <img
                                        src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/658975de80101def93274f42_coin%201.svg"
                                        alt="Coin Icon"
                                        className="w-5 sm:w-6 h-5 sm:h-6"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-2xl font-semibold mb-2 whitespace-nowrap	">Purchase quickly and securely</h3>
                                    <p className="text-mainColor text-sm sm:text-base">
                                        Insipidity the sufficient discretion imprudence resolution sir him decisively.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 sm:space-x-4 bg-[#ffefb0] rounded-lg p-3 sm:p-5 shadow-md w-full lg:w-10/12 w-[80%] " style={{ boxShadow: '9px 5px 0 0 #ffdf61' }}>
                                <div className="w-10 sm:w-16 md:w-20 h-10 sm:h-12 flex justify-center items-center bg-white rounded-full shadow">
                                    <img
                                        src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/658976b8822f338b473f430a_icon-13.svg"
                                        alt="Learning Icon"
                                        className="w-5 sm:w-6 h-5 sm:h-6"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-2xl font-semibold mb-2">Start learning right away</h3>
                                    <p className="text-mainColor text-sm sm:text-base">
                                        Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step;
