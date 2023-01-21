import React from "react";
import { Router } from "react-router-dom";
import { supabase } from "../../superbase";
import CardComponent from "../Card/Card";

const Navbar = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <>
      <div className="navbar sm:px-8 px-2 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logs</a>
              </li>
              <li>
                <a>Add Log</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case sm:text-xl text-md">
            FinnyLOG
          </a>
        </div>
        <div className="navbar-end">
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn btn-ghost btn-circle">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full sm:w-10 w-8">
                <span className="text-xs">+</span>
              </div>
            </div>
          </label>
          <button className="btn btn-ghost btn-circle">
            <div className="avatar online placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full sm:w-10 w-8">
                <span className="text-xs">JO</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
