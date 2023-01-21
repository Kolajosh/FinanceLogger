import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../superbase";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../utils/ValidationSchemas/login.validation";
import { Link, useNavigate } from "react-router-dom";
import useToggle from "../../utils/hooks/useToggle";
import { ReactComponent as LoadingIcon } from "../../assets/svg/loading.svg";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const [loading, toggleLoading] = useToggle();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      toggleLoading();
      try {
        const payload = {
          email: values?.email,
        };
        const response = await supabase.auth.signInWithOtp(payload);
        toggleLoading();
        if (response?.data) {
          toast.info("Kindly Check your email", {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/login-success", { state: payload });
        }
      } catch (error) {
        toast.error("An error occured", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;

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
              <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                Finance Logger
              </h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                Sign in to your account to view your finance records.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    value={values?.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
                {errors?.email && touched?.email ? (
                  <div className="pt-2 text-xs text-end text-red-600">
                    {errors?.email}
                  </div>
                ) : null}
              </div>

              <div>
                {loading ? (
                  <button
                    disabled
                    type="button"
                    className="animate-pulse group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 mt-2 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    <span className="animate-pulse">
                      <div class="w-5 h-5 border-b-2 border-white-900 rounded-full animate-spin"></div>
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 mt-2 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                    Sign In
                  </button>
                )}

                <p className="mt-2 text-sm text-center text-gray-600">
                  Don't have an account?{" "}
                  <span className="font-semibold underline">
                    <Link to="/register">Sign Up</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
