import React from 'react'
import CententCards from "../Cards/CenterContentCards"
import { BiWorld } from "react-icons/bi";
import {
  Image,
  Smile,
  MapPin,
  Camera,
  Gift,
  BarChart2
} from "lucide-react"

const CenterScrollTweet = () => {
  return (
    <>
    {/* CENTER CONTAINER */}
        <div className="w-full max-w-xl">

          {/* TABS */}
          <div className="h-16 flex items-center justify-center border-b border-[#2F3336]">
            <div className="tabs tabs-border flex justify-evenly w-full">

              <input
                type="radio"
                name="tabs"
                className="tab font-bold text-base w-fit flex-none"
                aria-label="For you"
              />

              <input
                type="radio"
                name="tabs"
                className="tab font-bold text-base w-fit flex-none"
                aria-label="Following"
                defaultChecked
              />

            </div>
          </div>

          {/* TWEET BOX */}
          <div className="border-b border-[#2F3336] p-4">
            <div className="flex gap-3 items-start">

              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shrink-0">
                A
              </div>

              {/* INPUT AREA */}
              <div className="flex-1">

                <textarea
                  placeholder="What's happening?"
                  className="w-full bg-transparent outline-none text-lg resize-none placeholder-gray-500"
                  rows="2"
                />

                {/* REPLY SETTING */}
                <p className="flex items-center gap-2 text-primary text-sm mt-1 font-bold cursor-pointer">
                  <BiWorld /> Everyone can reply
                </p>
                

                {/* DIVIDER */}
                <div className="border-t border-[#2F3336] my-3"></div>

                {/* ACTION BAR */}
                <div className="flex items-center justify-between">

                  {/* ICONS */}
                  <div className="flex gap-4 text-primary">
                    <Image size={20} className="cursor-pointer" />
                    <Gift size={20} className="cursor-pointer" />
                    <Smile size={20} className="cursor-pointer" />
                    <Camera size={20} className="cursor-pointer" />
                    <MapPin size={20} className="cursor-pointer" />
                    <BarChart2 size={20} className="cursor-pointer" />
                  </div>

                  {/* POST BUTTON */}
                  <button className="btn btn-primary btn-outline rounded-full">Post</button>
                </div>

              </div>
            </div>
          </div>

          {/* FEED */}
          <CententCards />
           <CententCards />

        </div>
    </>
  )
}

export default CenterScrollTweet