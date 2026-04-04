import React from 'react'

const CenterProfile = () => {
  return (
    <>
   
    <div className="w-full">
      {/* Cover Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Avatar + Edit Button */}
      <div className="flex justify-between items-end px-6 -mt-12">
        <div className="avatar">
          <div className="w-24 h-24 rounded-full ring ring-base-100 ring-offset-2">
            <img
              src="https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/006-nike-logos-jordan-white.jpg"
              alt="Profile Avatar"
            />
          </div>
        </div>
        <button className="btn btn-accent bg-black text-white font-bold btn-outline rounded-full">Edit Profile</button>
      </div>

      {/* Profile Info */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold">John Doe</h2>
        <p className="text-sm opacity-70">@johndoe</p>
        <p className="mt-2 text-sm">
          Explorer • Photographer • Coffee Enthusiast
        </p>

        {/* Stats */}
        <div className="flex gap-6 mt-4 text-sm">
          <span>
            <strong>3</strong> posts
          </span>
          <span>
            <strong>120</strong> followers
          </span>
          <span>
            <strong>80</strong> following
          </span>
        </div>
      </div>
    </div>

      


    </>
  )
}

export default CenterProfile