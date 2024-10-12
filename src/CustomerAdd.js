import React, { useState } from "react";
import { addCustomer } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

const CustomerAdd = () => {
  const [addText, setAddText] = useState("");
  const dispatch = useDispatch();

  const handleAddCustomer = () => {
    if (addText) {
      dispatch(addCustomer(addText));
      setAddText("");
    }
  };
  return (
    <div>
      <h3>Add New Customer</h3>
      <input
        type="text"
        value={addText}
        onChange={(e) => setAddText(e.target.value)}
      />
      <button onClick={handleAddCustomer}>Add</button>
    </div>
  );
};
export default CustomerAdd;
