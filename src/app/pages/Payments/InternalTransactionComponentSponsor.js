import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import API from "../../../apiUrl.json";
const InternalTransactionSponsor = () => {
  const [Transactions, setTransactions] = useState([]);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    fetch(API.baseUrl + API.internTransaction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userInfo.sponsor_id,
        user_type: "sponsor",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTransactions(data.transactions);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  function getTime(timestamp) {
    var date = new Date(timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  }
  return (
    <div className="tab-content" style={{ marginTop: "20px" }}>
      <div className="table-responsive">
        <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
          <thead>
            <tr className="text-left text-uppercase">
              <th className="pl-7" style={{ minWidth: "250px" }}>
                <span className="text-dark-75">Player and sponsorship</span>
              </th>
              <th style={{ minWidth: "100px" }}>credits</th>
              <th style={{ minWidth: "100px" }}>Type</th>
              <th style={{ minWidth: "100px" }}>Time and date</th>
              <th style={{ minWidth: "130px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {Transactions.map((transaction) => {
              return (
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      {/* <div className="symbol symbol-50 symbol-light mr-4">
                    <span className="symbol-label">
                      <span className="svg-icon h-75 align-self-end">
                        <SVG
                          src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
                        />
                      </span>
                    </span>
                  </div> */}
                      <div style={{ marginLeft: "20px" }}>
                        <a
                          href="#"
                          className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                        >
                          {transaction.playerDetails.player_name}
                        </a>
                        <span className="text-muted font-weight-bold d-block">
                          {transaction.tournamentDetails.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      {transaction.transactionDetails.credit_amount}
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      {transaction.transactionDetails.transaction_type}
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      {getTime(transaction.transactionDetails.time)} |{" "}
                      {new Date(
                        transaction.transactionDetails.time
                      ).toLocaleDateString("en-US")}
                    </span>
                  </td>
                  {/* <td>
                <img
                  src={toAbsoluteUrl("/media/logos/stars.png")}
                  alt="image"
                  style={{ width: "5.5rem" }}
                />
                <span className="text-muted font-weight-bold d-block font-size-sm">
                  Best Rated
                </span>
              </td> */}
                  <td className="pr-0 text-left">
                    <a
                      href="#"
                      className="btn btn-light-warning font-weight-bolder font-size-sm"
                    >
                      {transaction.transactionDetails.status}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternalTransactionSponsor;
