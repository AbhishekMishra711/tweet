import React from 'react'
import HomeLayout from "../../layout/HomeLayout"
import CenterProfile from '../../components/UserComponents/CenterProfile';
import Sidebar from '../../components/Sidebars/Sidebar';
import Rightbar from '../../components/Sidebars/Rightbar';

const Profile = () => {
  return (
    <>

     <div className="h-screen w-full grid grid-cols-12">

      {/* LEFT SIDEBAR */}
      <div className="col-span-3 border-r border-[#2F3336] flex justify-center">
        <Sidebar />
      </div>



      {/* MAIN FEED */}
      <div className="col-span-5 flex justify-center">

        
      < CenterProfile />

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="overflow-y-auto flex flex-col items-center gap-5 col-span-4 border-l border-[#2F3336] p-4">
        <Rightbar />
      </div>

    </div>

    </>
  )
}

export default Profile