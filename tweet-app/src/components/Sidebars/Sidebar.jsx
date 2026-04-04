import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiUserFollowFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (

        <div className="flex justify-center items-center h-screen overflow-y-hidden">
            <ul className="menu min-h-full w-60 p-2 flex flex-col gap-0.5">
                <li><a className='rounded-full pb-2'><IoLogoTwitter size={37} /></a></li>
                <li ><Link  to="/home" className="text-[22px] font-medium flex items-center rounded-full pb-2"><MdHomeFilled />Home</Link></li>
                <li><Link  to="/home" className="text-[22px] font-medium flex items-center rounded-full pb-2"><IoSearch /> Explore</Link></li>
                <li><Link  to="/home" className="text-[22px] font-medium flex items-center rounded-full pb-2"><RiUserFollowFill /> Follow</Link></li>
                <li><Link  to="/home" className="text-[22px] font-medium flex items-center rounded-full pb-2"><IoMdNotificationsOutline /> Notifications</Link></li>
                <li><Link  to="/profile" className="text-[22px] font-medium flex items-center rounded-full pb-2"><RxAvatar /> Profile</Link></li>
                <br />
                <button className="btn btn-primary btn-outline rounded-full h-12 text-xl pb-2">Post</button>

                {/* Bottom‑pinned item */}
                <li className="mt-auto">

                    <div className="flex items-center gap-3 rounded-full p-2">
                        <div className="avatar">
                            <div className="mask mask-circle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">@harthagra606</div>
                        </div>
                          <div>
                        <HiOutlineDotsHorizontal />
                    </div>
                    </div>
                  

                </li>
            </ul>
        </div>



    )
}

export default Sidebar