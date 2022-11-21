import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { supabase } from "../../superbase";
import { Formik, useFormik, ErrorMessage } from "formik";
import { registerValidationSchema } from "../../utils/ValidationSchemas/register.validation";
import { Link } from "react-router-dom";

function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        const payload = {
          email: values?.email,
          password: values?.password,
        };
        const response = await supabase.auth.signUp(payload);
        console.log(response);
      } catch (error) {
        alert(error);
      }
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    formik;

  //   const [formdata, setFormdata] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormdata({
  //       ...formdata,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleRegister = async () => {
  //     try {
  //       const response = await supabase.auth.signUp({
  //         email: formdata?.email,
  //         password: formdata?.password,
  //       });
  //       if (response.data !== "") {
  //         console.table(response);
  //       }
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };

  return (
    <>
      <div className="flex content-center items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
              Create an account and lets help you keep track of your finances
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                  onBlur={handleBlur}
                  value={values?.email}
                  onChange={handleChange}
                />
              </div>
              {errors?.email && touched?.email ? (
                <div className="pt-2 text-xs text-end text-red-600">
                  {errors?.email}
                </div>
              ) : null}
              <div>
                <label for="email-address" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 mt-2 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onBlur={handleBlur}
                  value={values?.password}
                  onChange={handleChange}
                />
              </div>
              {errors?.password && touched?.password ? (
                <div className="pt-2 text-xs text-end text-red-600">
                  {errors?.password}
                </div>
              ) : null}
            </div>

            <div>
              <button
                type="button"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleSubmit}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign Up
              </button>
              <p className="mt-2 text-sm text-center text-gray-600">
                Already have an account?{" "}
                <span className="font-semibold underline">
                  <Link to="/">Sign in</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
