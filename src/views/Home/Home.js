import React from "react";
import Modal from "../../components/Modal/Modal";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";
import { useFormik } from "formik";
import { supabase } from "../../superbase";

const Home = () => {
  const user = JSON.parse(
    localStorage.getItem("sb-vebrfhrtuefjfwmdmaid-auth-token")
  );
  const userID = user.user.id;

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
      window.location.href = "/home";
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    formik;

  return (
    <>
      <Navbar />
      <Modal
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Table />
    </>
  );
};

export default Home;
