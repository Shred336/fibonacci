import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FlureeTest.css";

const FlureeTest = () => {
  const [data, setData] = useState([]);
  axios.defaults.baseURL = "http://127.0.0.1:8090/fdb/project/finances";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const query = `{
        "select": [
          "*",
          { "store": ["*"], "paymentMethod": ["*"]}
          ],
        "from": "receipts"
      }`;
    const url = "/query";
    axios.post(url, query).then((response) => {
      //   console.log(response);
      setData(response.data);
    });
  };

  return (
    <div>
      <button onClick={getData}>Refresh</button>
      {/* {data.map((p) => (
        <div key={p["_id"]}>{p["receipts/category"]}</div>
      ))} */}
      {data.map((p, i) => (
        <div className="receiptResult" key={i}>
          <div>{p["receipts/category"]}</div>
          <div>{p.store["stores/name"]}</div>
          <div>{p.paymentMethod["paymentMethod/name"]}</div>
          <div>{p["receipts/total"]}</div>
        </div>
      ))}
    </div>
  );
};
export default FlureeTest;
