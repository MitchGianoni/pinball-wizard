'use client';

import Link from 'next/link';

const Home = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('SUBMITTING FORM');
    };

    return (
        <div className="container py-6">

            <div className="bg-gray-100 rounded-lg md:mx-16 p-4 md:flex">

                <div className="w-full md:w-2/3 p-4 md:p-16">
                    <p className="text-5xl text-center">Pinballz Deep</p>
                    <p className="text-3xl text-center">Restorations</p>

                    <p className="text-lg pt-4">We restore old rusty pinball machines and turn them back into youthful shiney games</p>
                </div>

                <div className="w-full md:w-1/3 relative flex items-center">

                    <div className="grid grid-cols-2 gap-4 w-full py-10 md:py-0 justify-items-center">
                        <div>
                            <p className="text-5xl">15</p>
                            <p className="text-gray-600 pt-2">Restored</p>
                        </div>

                        <div>
                            <p className="text-5xl">11</p>
                            <p className="text-gray-600 pt-2">Sold</p>
                        </div>

                        <div>
                            <p className="text-5xl">4</p>
                            <p className="text-gray-600 pt-2">In Progress</p>
                        </div>

                    </div>

                    <div className="absolute top-[calc(100%-16px)] right-0 bg-gray-800 p-3 w-full">
                        <p className="text-sm text-center text-white">Located in Marietta, GA
                            {/* and that's the best part what we do, its so great and everything has a happy way of working itself out */}
                        </p>
                    </div>
                </div>
            </div>


            <div className="pt-24">

                <div className="md:flex justify-between items-center pb-6 space-y-4 md:space-y-0">
                    <h3 className="text-3xl">Let&apos;s get in touch</h3>

                    <a href="mailto:contact@pinballzdeep.com" className="text-sm inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                        contact@pinballzdeep.com
                    </a>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="md:flex md:space-x-8">
                        <div className="py-2 w-full">
                            <label htmlFor="name" className="text-sm flex flex-col">
                                <span className="pb-1 text-gray-600">Name</span>
                                <input
                                    id="name"
                                    type="text"
                                    className="text-input"
                                />
                            </label>
                            <p className="text-red-600 text-xs pt-1.5">Error message example</p>
                        </div>

                        <div className="py-2 w-full">
                            <label htmlFor="email" className="text-sm flex flex-col">
                                <span className="pb-1 text-gray-600">Email</span>
                                <input
                                    id="email"
                                    type="text"
                                    className="text-input"
                                />
                            </label>
                            {/* <p className="text-red-600 text-xs pt-1.5">Error message here</p> */}
                        </div>
                    </div>

                    <div className="py-2 w-full">
                        <label htmlFor="message" className="text-sm flex flex-col">
                            <span className="pb-1 text-gray-600">Message</span>
                            <textarea name="message" rows="8" className="text-input" />
                        </label>
                        <p className="text-red-600 text-xs pt-1.5">Error message example</p>
                    </div>


                    <div className="flex justify-end">


                        <button type="submit" className="inline-flex items-center justify-center px-16 py-3 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                            Send it

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>


            <div className="text-center mt-10">
                <p className="text-4xl">Pinballz Deep Restorations</p>
                <p className="text-sm pt-4">Marietta, GA</p>
                <p className="text-sm pt-4">contact@pinballzdeep.com</p>
                <Link href="/about" className="text-sm text-blue-500 hover:text-blue-300">About</Link> <br />
                <Link href="/forsale" className="text-sm text-blue-500 hover:text-blue-300">Active Listings</Link> <br />
                <Link href="/backlog" className="text-sm text-blue-500 hover:text-blue-300">Backlog of Projects</Link> <br />
            </div>
        </div>
    );
};

export default Home;
