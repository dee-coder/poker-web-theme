/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function MixedWidget11({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Body */}
      <div className="card-body d-flex flex-column">
        <div className="flex-grow-1 pb-5">
          {/* begin::Info */}
          <div className="d-flex align-items-center pr-2 mb-6">
            <span className="text-muted font-weight-bold font-size-lg flex-grow-1">
              Newtwork
            </span>
            <div className="symbol symbol-50">
              <span className="symbol-label bg-light-light">
                <img
                  src={toAbsoluteUrl("https://888poker.com")}
                  className="h-50 align-self-center"
                ></img>{" "}
              </span>
            </div>
          </div>
          {/* end::Info */}

          {/* begin::Link */}
          <span className="text-dark font-weight-bolder text-hover-primary font-size-h2">
            This is my Name.
          </span>
          {/* end::Link */}

          {/* begin::Desc */}
          <p className="text-dark-50 font-weight-normal font-size-lg mt-6">
            Conveniently mesh stand-alone e-markets rather than just in time
            meta-services. Continually myocardinate visionary users vis-a-vis
            strategic core.
          </p>
          {/* end::Desc */}
        </div>
        {/* begin::Team */}

        {/* end::Team */}
      </div>
      {/* end::Body */}
    </div>
  );
}
