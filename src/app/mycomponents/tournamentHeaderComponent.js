/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

export function TournamentHeader({ className, obj }) {
  const [url, setUrl] = useState();
  const [href, setHref] = useState();

  useEffect(() => {
    switch (obj.network) {
      case "PartyPoker":
        var string = "/media/poker-logos/partypoker-logo.jpg";
        setUrl(string);
        setHref("https://pokerstars.com");

        break;

      case "PokerStars":
        var string = "/media/poker-logos/pokerstars-logo.jpg";
        setUrl(string);
        setHref("https://pokerstars.com");
        break;

      case "SkyPoker":
        var string = "/media/poker-logos/skypoker-logo.jpg";
        setUrl(string);
        setHref("https://skypoker.com");
        break;

      case "888Poker":
        var string = "/media/poker-logos/888poker-logo.png";
        setUrl(string);
        setHref("https://888poker.com");
        break;

      case "FullTilt":
        var string = "/media/poker-logos/fulltilt-logo.png";
        setUrl(string);
        setHref("https://fullltilt.com");
        break;
    }
  }, []);

  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Body */}
      <div className="card-body d-flex flex-column">
        <div className="flex-grow-1 pb-5">
          {/* begin::Info */}
          <div className="d-flex align-items-center pr-2 mb-6">
            <span className="text-muted font-weight-bold font-size-lg flex-grow-1">
              {obj.network}
            </span>
            <div className="symbol symbol-50">
              <span className="symbol-label bg-light-light">
                <img
                  src={toAbsoluteUrl(url)}
                  className="h-50 align-self-center"
                ></img>{" "}
              </span>
            </div>
          </div>
          {/* end::Info */}

          {/* begin::Link */}
          <span className="text-dark font-weight-bolder text-hover-primary font-size-h2">
            {obj.name}
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
        <div className="d-flex align-items-center">
          <Button variant={"primary"}>Get Sponsored</Button>

          <a href={href} target="_blank">
            <Button variant={"secondary"} style={{ marginLeft: "10px" }}>
              {obj.network}{" "}
              <i
                style={{ fontSize: "12px", marginLeft: "5px" }}
                class="fas fa-external-link-alt"
              ></i>
            </Button>
          </a>

          <a href={href} target="_blank">
            <Button variant={"secondary"} style={{ marginLeft: "10px" }}>
              Add To Calender
              <i
                style={{ fontSize: "12px", marginLeft: "5px" }}
                class="fas fa-calendar-check"
              ></i>
            </Button>
          </a>
        </div>
        {/* end::Team */}
      </div>
      {/* end::Body */}
    </div>
  );
}