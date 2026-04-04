import React from 'react'




const Rightbar = () => {
    return (
        <>
            <div className='h-20 w-full flex justify-center'>
            <label className="input w-95 rounded-full ">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" placeholder="Search" />
            </label>
            </div>

            <div className="card w-96 bg-base-100 shadow-sm border border-[#2F3336] rounded-2xl">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">Trending</span>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">
                            What’s happening</h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <span>AI-driven image enhancements</span>
                        </li>
                        <li className="opacity-50">
                            <span className="line-through">Seamless cloud integration</span>
                        </li>
                        <li className="opacity-50">
                            <span className="line-through">Real-time collaboration tools</span>
                        </li>
                    </ul>

                </div>
            </div>


            <div className="card w-96 bg-base-100 shadow-sm border border-[#2F3336] rounded-2xl">
                <div className="card-body">
                    <span className="badge badge-xs badge-primary">Official</span>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">
                            Who to follow</h2>
                    </div>
                    <ul className="mt-6 flex flex-col text-xs ">


                        <li>
                            <div className="grid grid-cols-3 items-center gap-3 rounded-full p-2">
                                <div className='flex items-center gap-2'>
                                <div className="avatar">
                                    <div className="mask mask-circle h-12 w-12">
                                        <img
                                            src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Chu signh</div>
                                    <div className="text-sm opacity-50">@chuman2</div>
                                </div>
                                </div>

                                <div></div>
                                
                                <button className="btn bg-white text-black border-[#e5e5e5] rounded-full">Follow</button>
                            </div>
                        </li>

                        
                        <li>
                            <div className="grid grid-cols-3 items-center gap-3 rounded-full p-2">
                                <div className='flex items-center gap-2'>
                                <div className="avatar">
                                    <div className="mask mask-circle h-12 w-12">
                                        <img
                                            src="https://mockmind-api.uifaces.co/content/human/222.jpg"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Charamshankar</div>
                                    <div className="text-sm opacity-50">@charamnn89</div>
                                </div>
                                </div>

                                <div></div>
                                
                                <button className="btn bg-white text-black border-[#e5e5e5] rounded-full">Follow</button>
                            </div>
                        </li>

                        
                        <li>
                            <div className="grid grid-cols-3 items-center gap-3 rounded-full p-2">
                                <div className='flex items-center gap-2'>
                                <div className="avatar">
                                    <div className="mask mask-circle h-12 w-12">
                                        <img
                                            src="https://mockmind-api.uifaces.co/content/human/128.jpg"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Sania pandy</div>
                                    <div className="text-sm opacity-50">@harthagra606</div>
                                </div>
                                </div>

                                <div></div>
                                
                                <button className="btn bg-white text-black border-[#e5e5e5] rounded-full">Follow</button>
                            </div>
                        </li>

                        
                        <li>
                            <div className="grid grid-cols-3 items-center gap-3 rounded-full p-2">
                                <div className='flex items-center gap-2'>
                                <div className="avatar">
                                    <div className="mask mask-circle h-12 w-12">
                                        <img
                                            src="https://mockmind-api.uifaces.co/content/human/92.jpg"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">John Doe</div>
                                    <div className="text-sm opacity-50">@harthagra606</div>
                                </div>
                                </div>

                                <div></div>
                                
                                <button className="btn bg-white text-black border-[#e5e5e5] rounded-full">Follow</button>
                            </div>
                        </li>

                        
                        <li>
                            <div className="grid grid-cols-3 items-center gap-3 rounded-full p-2">
                                <div className='flex items-center gap-2'>
                                <div className="avatar">
                                    <div className="mask mask-circle h-12 w-12">
                                        <img
                                            src="https://mockmind-api.uifaces.co/content/human/219.jpg"
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Ram kumari</div>
                                    <div className="text-sm opacity-50">@harthagra606</div>
                                </div>
                                </div>

                                <div></div>
                                
                                <button className="btn bg-white text-black border-[#e5e5e5] rounded-full">Follow</button>
                            </div>
                        </li>


                    </ul>

                </div>
            </div>

        </>
    )
}

export default Rightbar