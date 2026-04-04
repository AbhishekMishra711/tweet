import { useState } from "react"
import toast from "react-hot-toast";

const Signup = () => {

  return (
    <>
      <div className="h-screen w-full grid grid-cols-2">

        <div className="flex justify-center items-center">

          <span>
            Providing AI Agents for
            <span className="text-rotate">
              <span>
                <span className="bg-teal-400 text-teal-800 px-2">Designers</span>
                <span className="bg-red-400 text-red-800 px-2">Developers</span>
                <span className="bg-blue-400 text-blue-800 px-2">Managers</span>
              </span>
            </span>
          </span>

        </div>
        <div className="flex justify-center items-center">

          <div className="card w-96 space-y-10">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <div className="form-container">

              <form className="form space-y-2">

                {/* fullname input */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-neutral"
                  name="fullname"
                />


                {/* username input */}
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
                    name="username"
                    placeholder="Username"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers or dash"
                  />
                </label>
                <p className="validator-hint">
                  Must be 3 to 30 characters
                  <br />containing only letters, numbers or dash
                </p>

                {/* date input */}
                <input
                  type="date"
                  className="input"
                  name="date"
                />


                {/* Gender input */}
                <select className="select validator" required>
                  <option disabled selected value="">Choose:</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <p className="validator-hint">Required</p>
                {/* <input
                  type="text"
                  className="input"
                  placeholder="gender"
                  list="browsers"
                  name="gender"
                />
                <datalist id="browsers">
                  <option value="Male"></option>
                  <option value="Female"></option>
                  <option value="Other"></option>
                </datalist> */}


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
                    name="password"
                    required
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>


                {/* email input */}
                <label className="input validator">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="mail@site.com"
                    required
                    name="email"
                  />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>


                <p className="signup">Don't have an account?
                  <a rel="noopener noreferrer" href="/login" className> Login</a>
                </p>

                <button className="btn btn-primary">SingIn</button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Signup