/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

import { Dropdown } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { useHtmlClassService } from "../../_metronic/layout";
import { DropdownMenu2 } from "../../_metronic/_partials/dropdowns";
import _ from "lodash";

const SponsorStatistics = ()=> {


  return (
    <div className={`card card-custom bg-gray-100 `}>
            <div className="card-header border-0 bg-primary py-5">
        <h3 className="card-title font-weight-bolder text-white">
          Profit History
        </h3>
        <div className="card-toolbar">
          <Dropdown className="dropdown-inline" drop="down" alignRight>
            <Dropdown.Toggle
              className="btn btn-transparent-white btn-sm font-weight-bolder dropdown-toggle px-5"
              variant="transparent"
              id="dropdown-toggle-top"
            >
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
              <DropdownMenu2 />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
     </div>
     )
}

export default SponsorStatistics;