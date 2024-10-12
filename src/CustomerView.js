import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/CustomerSlice";

const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const handleDelete = (indexData) => {
    dispatch(deleteCustomer(indexData));
  };

  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyle: "none" }}>
        {customers.map((customer, index) => (
          <li>
            {customer}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CustomerView;
