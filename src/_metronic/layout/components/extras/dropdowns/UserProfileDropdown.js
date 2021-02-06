/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";

export function UserProfileDropdown(props) {
  const { user } = useSelector((state) => state.auth);

  var userInfo = props.userInfo;
  var role = props.role;
  //console.log("info:", props.userInfo);

  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      light:
        objectPath.get(uiService.config, "extras.user.dropdown.style") ===
        "light",
    };
  }, [uiService]);

  if (
    props.userInfo === null ||
    props.userInfo === "undefined" ||
    props.userInfo === undefined
  ) {
    return (
      <Dropdown drop="down" alignRight>
        <Dropdown.Toggle
          as={DropdownTopbarItemToggler}
          id="dropdown-toggle-user-profile"
        >
          <Link to="/auth">
            <div
              className={
                "btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto"
              }
            >
              <span className="text-white opacity-90 font-weight-bolder font-size-base d-none d-md-inline mr-4">
                Login
              </span>
              <span className="symbol symbol-35">
                <span className="symbol-label text-white font-size-h5 font-weight-bold bg-white-o-30">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
              </span>
            </div>
          </Link>
        </Dropdown.Toggle>
      </Dropdown>
    );
  } else {
    return (
      <Dropdown drop="down" alignRight>
        <Dropdown.Toggle
          as={DropdownTopbarItemToggler}
          id="dropdown-toggle-user-profile"
        >
          <div
            className={
              "btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto"
            }
          >
            <span className="text-white opacity-70 font-weight-bold font-size-base d-none d-md-inline mr-1">
              Hiii,
            </span>
            <span className="text-white opacity-90 font-weight-bolder font-size-base d-none d-md-inline mr-4">
              {role === "player" ? userInfo.player_name : userInfo.sponsor_name}
            </span>
            <span className="symbol symbol-35">
              <span className="symbol-label text-white font-size-h5 font-weight-bold bg-white-o-30">
                {role === "player"
                  ? userInfo.player_name[0]
                  : userInfo.sponsor_name[0]}
              </span>
            </span>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0">
          <>
            {/** ClassName should be 'dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl' */}
            {layoutProps.light && (
              <>
                <div className="d-flex align-items-center p-8 rounded-top">
                  <div className="symbol symbol-md bg-light-primary mr-3 flex-shrink-0">
                    <img
                      src={toAbsoluteUrl("/media/users/300_21.jpg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
                      {role === "player"
                        ? userInfo.player_name
                        : userInfo.sponsor_name}
                      <br />
                    </span>

                    <span
                      style={{
                        fontWeight: "normal",
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      {role === "player"
                        ? userInfo.player_email
                        : userInfo.sponsor_email}
                    </span>
                  </div>

                  {/* <span className="label label-light-success label-lg font-weight-bold label-inline">
                    
                  </span> */}
                </div>
                <div className="separator separator-solid"></div>
              </>
            )}

            {!layoutProps.light && (
              <div
                className="d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl(
                    "/media/misc/bg-1.jpg"
                  )})`,
                }}
              >
                <div className="symbol bg-white-o-15 mr-3">
                  <span className="symbol-label text-success font-weight-bold font-size-h4">
                    S
                  </span>
                  {/*<img alt="Pic" className="hidden" src={user.pic} />*/}
                </div>
                <div className="text-white m-0 flex-grow-1 mr-3 font-size-h5">
                  {role === "player"
                    ? userInfo.player_name
                    : userInfo.sponsor_name}
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: "normal",
                      color: "gray",
                      fontSize: "10px",
                    }}
                  >
                    {role === "player"
                      ? userInfo.player_email
                      : userInfo.sponsor_email}
                  </span>
                </div>

                {/* <span className="label label-success label-lg font-weight-bold label-inline">
                  3 messages
                </span> */}
              </div>
            )}
          </>

          <div className="navi navi-spacer-x-0 pt-5">
            <Link
              to={role === "player" ? "/player-profile" : "/sponsor-profile"}
            >
              <a href="#" className="navi-item px-8">
                <div className="navi-link">
                  <div className="navi-icon mr-2">
                    <i className="flaticon2-calendar-3 text-success" />
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold">My Profile</div>
                    <div className="text-muted">
                      Account settings and more{` `}
                      {/* <span className="label label-light-danger label-inline font-weight-bold">
                        update
                      </span> */}
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link to="/messages">
              <a className="navi-item px-8">
                <div className="navi-link">
                  <div className="navi-icon mr-2">
                    <i className="flaticon2-chat-1 text-warning"></i>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold">My Messsage</div>
                    <div className="text-muted">Inbox and tasks</div>
                  </div>
                </div>
              </a>
            </Link>

            {/* <a className="navi-item px-8">
              <div className="navi-link">
                <div className="navi-icon mr-2">
                  <i className="flaticon2-rocket-1 text-danger"></i>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Activities</div>
                  <div className="text-muted">Logs and notifications</div>
                </div>
              </div>
            </a> */}

            <Link
              to={
                localStorage.getItem("role") === "player"
                  ? `/player/sponsorships`
                  : `/sponsor/sponsorships`
              }
              className="navi-item px-8"
            >
              <div className="navi-link">
                <div className="navi-icon mr-2">
                  <i className="flaticon2-hourglass text-primary"></i>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Sponsorships</div>
                  <div className="text-muted">
                    latest games and sponsorships
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/notifications" className="navi-item px-8">
              <div className="navi-link">
                <div className="navi-icon mr-2">
                  <i className="flaticon2-notification text-primary"></i>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Notifications</div>
                  <div className="text-muted">
                    Latest and earlier notifications
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/payments" className="navi-item px-8">
              <div className="navi-link">
                <div className="navi-icon mr-2">
                  <i className="flaticon2-copy text-primary"></i>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Payments</div>
                  <div className="text-muted">
                    Wallet, Payments & Withdrawel
                  </div>
                </div>
              </div>
            </Link>
            <div className="navi-separator mt-3"></div>

            <div className="navi-footer  px-8 py-5">
              <Link
                to="/logout"
                className="btn btn-light-primary font-weight-bold"
              >
                Sign Out
              </Link>
              <Link
                to="/upgrade-plan"
                className="btn btn-clean font-weight-bold"
              >
                Upgrade Plan
              </Link>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
