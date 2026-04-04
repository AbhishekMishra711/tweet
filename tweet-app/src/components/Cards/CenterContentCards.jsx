import React from 'react'
import { RiVerifiedBadgeLine } from "react-icons/ri"
import { LuDot } from "react-icons/lu"
import { FaComment } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import heroImage from "../../assets/hero.png";
import dhapnyvidro from "../../assets/video3.mp4"



const Profile = () => {
  return (
    <>

      <div className="card bg-base-100 w-130 shadow-sm p-3 border-base-300">
        <div className="card-body px-0">
          <div className="grid grid-cols-14 gap-5">
            {/* Avatar Section */}
            <div className="avatar flex justify-center items-center col-span-2">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 ">
                <img
                  src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  alt="Profile avatar"
                />
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="col-span-12">
              <div className="flex items-center gap-2">
                <h2 className="card-title flex items-center">
                  Mizzope <RiVerifiedBadgeLine />
                </h2>
                <h2>@Mizzope1924h</h2>
                <LuDot />
                <h3>4h</h3>
              </div>

              <p>
                A card component has a figure, a body part, and inside body there are title and actions parts
              </p>
            </div>

          </div>
        </div>

        {/* Card Figure */}
        <figure className='rounded-4xl'>
          {/* <img
            src={dhapnyvidro}
            alt="Shoes"
          /> */}
          <video
            src={dhapnyvidro}
            autoPlay
            loop
            muted={false}
            controls
            playsInline
            className="w-full h-auto rounded-lg shadow-md"
          />
        </figure>

        <div className="h-15 w-full grid grid-cols-5 place-items-center">
          <AiFillLike size={23} />
          <FaComment size={23} />
          <FaShare size={23} />
          <FaRegEye size={30} />
          <CiSaveUp2 size={23} />
        </div>


      </div>
      <div className="divider divider-neutral"></div>

    </>
  )
}

export default Profile
