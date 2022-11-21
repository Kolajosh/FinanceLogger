import React from "react";

const Modal = ({ handleSubmit, handleChange, values }) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold mb-3">
            Log in your daily expenses to keep track!!
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Enter Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                placeholder="e.g. N300,000"
                className="input input-bordered w-full "
                onChange={handleChange}
                value={values?.amount}
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">
                  What did you do with this Amount?
                </span>
              </label>
              <input
                type="text"
                name="desc"
                placeholder="e.g. I bought bread and beans"
                className="input input-bordered w-full "
                onChange={handleChange}
                value={values?.desc}
              />
            </div>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">
                  Cash, Cheque, POS or Transfer?
                </span>
              </label>
              <select
                name="mode"
                className="select select-bordered"
                onChange={handleChange}
                value={values?.mode}
              >
                <option selected>Select one</option>
                <option>Cash</option>
                <option>Cheque</option>
                <option>POS</option>
                <option>Transfer</option>
              </select>
            </div>
            <div className="flex justify-end modal-action">
              <button onClick={handleSubmit} className="btn mt-4 ">
                Add
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default Modal;
