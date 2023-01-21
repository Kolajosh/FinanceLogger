import React, { useEffect, useState } from "react";
import { supabase } from "../../superbase";
import TwitterCLDR from "twitter_cldr/full/core";

const Table = ({userID}) => {
  var TwitterCldr = require("twitter_cldr").load("en");
  var fmt = new TwitterCldr.CurrencyFormatter();
  // console.log(fmt.format(1337, { currency: "NGN" })); // 1.337,00 €

  const [tabledata, setTabledata] = useState();
  useEffect(() => {
    getProfile();
  }, [userID]);

  const getProfile = async () => {
    try {
      let { data, error, status } = await supabase
        .from("financelogs")
        .select(`id`)
        .eq("id", userID)
        .select("*");

      console.log(data);

      if (data) {
        setTabledata(data.reverse());
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {tabledata?.map((logs) => (
        <div className="flex justify-center mb-1 sm:hidden">
          <div className="card w-[90%] border-2 relative bg-base-100 shadow-xl">
            <div className=" flex justify-between p-4 text-sm">
              <div>
                <h2 className="text-lg font-semibold">
                  {fmt.format((logs?.amount), { currency: "NGN" })}
                </h2>
                <p className="italic text-xs">{logs?.description}</p>
              </div>
              <div className="flex flex-col italic text-xs items-center content-center text-right">
                <p>{logs?.mode}</p>
                <p>{logs?.date.split("T")[0]}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hidden justify-center over sm:flex">
        <table className="overflow-x-auto table table-compact table-zebra sm:w-[90%] w-[50%]">
          <thead>
            <tr>
              <th className=""></th>
              <th>Amount</th>
              <th>Desc</th>
              <th>Mode</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tabledata?.map((log, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{fmt.format(log?.amount, { currency: "NGN" })}</td>
                <td>{log?.description}</td>
                <td>{log?.mode}</td>
                <td>{log?.date.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
