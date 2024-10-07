import React from 'react'

const HeroSection = () => {
    return (
        <div className="Hero-Section bg-[#FEF8F5] relative">
            <div className="container mx-auto py-8 px-4 lg:py-16 lg:px-6">
                <div className="grid md:grid-cols-2 gap-8 justify-center items-center relative z-10	">

                    {/* Header Section */}
                    <div className="leftSection flex items-start flex-col">
                        {/* Tagline */}
                        <div className="flex flex-col items-center text-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
                            <div className="bg-prime rounded-full flex items-center py-2 px-4 mb-12">
                                <div className="hero-tagline-star px-3">*</div>
                                <div className="hero-tagline-text font-Helvetica font-normal text-base md:text-lg">
                                    Get started with Edulink
                                </div>
                                <div className="hero-tagline-star px-3">*</div>
                            </div>
                        </div>

                        <h1 className="text-7xl  w-full md:w-11/12	 font-semibold font-sora leading-tight">
                            Find suitable courses from the
                        </h1>

                        <div className="hero-title-wrap flex items-center font-sora pt-2 flex-wrap">
                            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">best</h1>
                            <div className="hero-avatar-wrap border border-black flex rounded-full p-1 mx-4 mt-2">
                                <img
                                    src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/64fef3fc4dcfbe0161683802_avatar-2.jpg"
                                    alt="Avatar 02"
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/64fef3b772d4f4d973b93420_avatar-1.jpg"
                                    alt="Avatar 01"
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full -ml-4"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/64fef4350756f3ac4dd087d5_arrow-right.svg"
                                    alt="Arrow"
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
                                />
                            </div>
                            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">mentors</h1>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-mainColor font-normal leading-snug text-start w-full md:w-5/6 text-sm md:text-base">
                            The good gathering doesn't bearing day stars over open behold may male tree replenish don't blessed beast days earth fifth let multiply and he every blessed.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-mainColor text-white py-3 px-4 rounded-xl mr-4 hover:bg-gray-800 text-sm sm:text-lg">
                                Start Learning
                            </button>
                            <button className="flex items-center text-mainColor font-normal	 text-sm sm:text-lg">
                                Watch Video
                                <span className="ml-2 inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mentors Section */}
                    <div className="relative flex justify-center z-10	">
                        <div>
                            <img
                                src="https://assets-global.website-files.com/64fed37ef8f0a16c147f2b29/64feefd6e8bce1dce6dfb123_hero-image-p-500.jpg" 
                                alt="Main Mentor"
                                className="w-64 md:w-80 lg:w-11/12	 h-auto rounded-xl shadow-md"
                            />
                        </div>
                        <div className=' absolute  -top-2 md:-top-8 right-24 max-sm:hidden max-md:hidden'>
                            <img
                                src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/64feff644049a05b3083798f_Decoration.svg"  
                                alt="Main Mentor"
                                className="     "
                            />
                        </div>

                        <div className="absolute max-sm:hidden   -top-4 md:-top-8 -left-14 blur-sm    ">
                            <img
                                src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/650036a25829f695456adff4_hero-image-3.jpg"
                                alt="Small Mentor"
                                className="w-24 md:w-32 lg:w-40 rounded-lg shadow-lg opacity-50 "
                            />
                        </div>

                        {/* Smaller Image - Overlay */}
                        <div className="absolute -bottom-4 md:-bottom-8 right-4 max-md:hidden">
                            <img
                                src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/65003763d8af464b8a4e7dfe_hero-image-2.jpg"
                                alt="Small Mentor"
                                className="rounded-lg shadow-lg opacity-50"
                            />
                        </div>

                        {/* Mentor Info Box - Bottom Left */}
                        <div className="absolute -bottom-4 md:-bottom-8 left-4 bg-white p-4 rounded-lg bg-secondary-3 items-center space-x-2" style={{ boxShadow: '8px 6px 0 0 #ffbcbc' }}>
                            <div className="flex flex-col items-start space-y-2 pb-2 px-2">
                                <h2 className="text-sm md:text-base font-semibold">UI Design Pattern</h2>
                                <div className="flex items-center space-x-4">
                                    <img src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/65003afd76af54cd1e9e498e_avatar-3.jpg" alt="Avatar" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <div className="text-sm font-medium">Dennis Barrett</div>
                                        <div className="flex items-center space-x-2">
                                            <img src="https://cdn.prod.website-files.com/64fed37ef8f0a16c147f2b29/65003a8c2f57fbf71081e4c4_file.svg" alt="File" className="w-3 h-3" />
                                            <div className="text-xs text-gray-500">123 Courses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='shape-1'></div>
        </div>
    )
}

export default HeroSection
