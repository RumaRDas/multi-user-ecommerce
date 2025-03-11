import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-x1 mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium ">
            Please sign in your account
          </p>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
              />
            </div>

            <button
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg
             text-white rounded-md px-7 py-2 mb-3"
            >
              Sign In
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have an account ?{" "}
                <Link className=" font-bold" to="/register">
                  Sing Up
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div
                className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg
                           hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden"
              >
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div
                className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg
                           hover:shadow-blue-700/50 justify-center items-center cursor-pointer overflow-hidden"
              >
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
