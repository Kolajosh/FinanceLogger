import React, { useEffect, useMemo, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";
import { useFormik } from "formik";
import { supabase } from "../../superbase";
import useToggle from "../../utils/hooks/useToggle";
import { ToastContainer, toast } from "react-toastify";
import { Tab } from "@mui/material";

const Home = () => {
  const [loading, toggleLoading] = useToggle();
  const [userID, setUserID] = useState();
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const res = await supabase.auth.getUser();
    setUser(res);
    console.log(user);
    console.log(user?.data?.user?.id);
    // ...
    if (user) {
      const id = user?.data?.user?.id;
      setUserID(id);
      console.log(userID);
    }
    // else {b
    //   alert("unauthorized, please login aagin")
    //   window.location.href = "/login";
    // }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  useEffect(() => {
    if (user?.data?.user === null) {
      toast.error("Unauthorized, please log in again", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => (window.location.href = "/login"), 500);
    }
  }, [user?.data?.user])

  const formik = useFormik({
    initialValues: {
      id: "",
      amount: "",
      desc: "",
      mode: "",
      date: "",
    },
    onSubmit: async (values) => {
      try {
        const payload = {
          id: userID,
          amount: values?.amount,
          description: values?.desc,
          mode: values?.mode,
          date: new Date(),
        };
        console.log(values);
        let { data, error, status } = await supabase
          .from("financelogs")
          .insert([payload]);
        if (data) {
          console.log(data);
        }
        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.message);
      }
      window.location.href = "/";
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    formik;

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Modal
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Table userID={userID} />
    </>
  );
};

export default Home;
