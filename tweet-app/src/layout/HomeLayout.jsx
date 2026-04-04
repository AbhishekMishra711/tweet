import React from 'react'
import ContentCards from '../components/Cards/CenterContentCards'
import Rightbar from "../components/Sidebars/Rightbar"
import Sidebar from '../components/Sidebars/Sidebar'
import CenterScrollTweet from '../components/tweet/CenterScrollTweet'




const HomeLayout = () => {
  return (
    <div className="h-screen w-full grid grid-cols-12">

      {/* LEFT SIDEBAR */}
      <div className="col-span-3 border-r border-[#2F3336] flex justify-center">
        <Sidebar />
      </div>



      {/* MAIN FEED */}
      <div className="col-span-5 flex justify-center overflow-y-auto">

        
      < CenterScrollTweet />

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="overflow-y-auto flex flex-col items-center gap-5 col-span-4 border-l border-[#2F3336] p-4">
        <Rightbar />
      </div>

    </div>
  )
}

export default HomeLayout