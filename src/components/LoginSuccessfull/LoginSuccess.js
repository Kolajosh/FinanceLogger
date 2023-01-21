import React from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { supabase } from "../../superbase";

function LoginSuccess() {
  const { state } = useLocation();

  console.log(state?.email);

  const handleClick = async () => {
    console.log("jdihd");
    // try {
    const response = await supabase.auth.signInWithOtp(state);
    console.log(response);
    if (response?.data) {
      toast.info("Kindly Check your email one more time", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    // } catch (error) {
    //   toast.error("An error occured", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="space-y-8 flex justify-center items-center"
        style={{ height: "100vh" }}
      >
        <div className="flex items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="w-full shadow-2xl p-12 rounded-[15px] max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">
                Check your mail to complete login request
              </h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                Can't see anything?{" "}
                <span
                  onClick={() => handleClick()}
                  className="cursor-pointer text-blue-700 underline"
                >
                  Click
                </span>{" "}
                to send a request again
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSuccess;
