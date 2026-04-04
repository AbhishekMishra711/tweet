

const Login = () => {
  return (
    <>
      <div className="h-screen w-full grid grid-cols-2">

        <div className="flex justify-center items-center">

          <div className="hover-3d">
            {/* content */}
            <figure className="max-w-100 rounded-2xl">
              <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>

        <div className="flex justify-center items-center">


          <div className="card w-96 space-y-10">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="form-container  ">

              <form className="form space-y-4">


                {/* Username Input */}

                <label className="input validator">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>

                  <input
                    type="text"
                    required
                    placeholder="Username"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                  />
                </label>

                {/* password input */}
                <label className="input validator">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                      ></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                  />
                </label>



                <p className="signup">Don't have an account?
                  <a rel="noopener noreferrer" href="/signup" > SignUp</a>
                </p>
                <button className="btn btn-primary">Login</button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login