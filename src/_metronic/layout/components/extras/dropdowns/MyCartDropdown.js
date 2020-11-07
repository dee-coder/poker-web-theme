/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import { Typography } from "@material-ui/core";
import API from "../../../../../apiUrl.json";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

export function MyCartDropdown() {
  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    fetch(API.baseUrl + API.walletInfo, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:
          localStorage.getItem("role") === "player"
            ? userInfo.player_id
            : userInfo.sponsor_id,
        role: localStorage.getItem("role"),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        setWalletInfo(response.info);
      })
      .catch((err) => console.log(err));
  });
  const bgImage = toAbsoluteUrl("/media/misc/bg-1.jpg");
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart-toggle"
      >
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="mycart-panel-tooltip">User Wallet</Tooltip>}
        >
          <div className="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1">
            <span className="svg-icon svg-icon-xl">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet.svg")}
              />
            </span>
          </div>
        </OverlayTrigger>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-xl dropdown-menu-anim-up">
        <form>
          <div
            className="d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <span className="btn btn-md btn-icon bg-white-o-15 mr-4">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet3.svg")}
              />
            </span>
            <h4 className="text-white m-0 flex-grow-1 mr-3">My Wallet</h4>
            <button type="button" className="btn btn-success btn-sm">
              Add Credits
            </button>
          </div>

          <div className="p-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Typography variant="button" style={{ fontSize: "15px" }} charge>
                Sponsor Credits
              </Typography>
              <Typography variant="h4" style={{ fontWeight: "600" }}>
                {walletInfo.sponsor_credits}
              </Typography>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Typography variant="button" style={{ fontSize: "15px" }} charge>
                Payment Credits
              </Typography>
              <Typography variant="h4" style={{ fontWeight: "600" }}>
                {walletInfo.payment_credits}
              </Typography>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-7">
              <span className="font-weight-bold text-muted font-size-sm mr-2">
                Last Recharged on 11/09/2020
              </span>
            </div>
          </div>
        </form>
      </Dropdown.Menu>
    </Dropdown>
  );
}
