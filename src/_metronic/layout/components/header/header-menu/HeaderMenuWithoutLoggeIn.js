/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeadersMenuNormal({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      {/*begin::Header Nav*/}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <NavLink className="menu-link" to="/">
            <span className="menu-text">Home</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>

        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/games-by-date"
          )}`}
        >
          <NavLink className="menu-link" to="/how-it-works">
            <span className="menu-text">How it work?</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>

        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/games-by-date"
          )}`}
        >
          <NavLink className="menu-link" to="/about-us">
            <span className="menu-text">About</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>

        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/contact-us"
          )}`}
        >
          <NavLink className="menu-link" to="/contact-us">
            <span className="menu-text">Contact Us</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/blog"
          )}`}
        >
          <NavLink className="menu-link" to="/blog">
            <span className="menu-text">Blog</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
          
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/games-by-date"
          )}`}
        >
          <NavLink className="menu-link" to="/findtournaments">
            <span className="menu-text">Find Tournaments</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*Classic submenu*/}
        {/*begin::1 Level*/}

        {/*end::1 Level*/}
      </ul>
      {/*end::Header Nav*/}
    </div>
  );
}
