/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Badge } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import _ from "lodash";
import API from "../../apiUrl.json";

export function TournamentHeader({ className, obj, networks }) {
  const [url, setUrl] = useState();
  const [href, setHref] = useState();
  const [icon, setIcon] = useState();
  const [networksAll, setNetworksAll] = useState([]);

  useEffect(() => {
    //console.log(obj);
    // var obj = _.find(networks, ["name", obj.network]);
    // var url = "https://pokerswapping.com/networks/" + obj.page_slug;
    // setUrl(url);
    // setIcon(obj.icon);
    fetch(API.baseUrl + API.getAllNetworks, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);

        setNetworksAll(json.tournaments);
        //console.log(obj.network);
        var data = _.find(json.tournaments, ["name", obj.network]);
        console.log(data);
        var url = "https://pokerswapping.com/networks/" + data.page_slug;
        setUrl(url);
        setIcon(data.icon);
      })
      .catch((err) => console.log(err));

    // switch (obj.network) {
    //   case "PartyPoker":
    //     var string = "/media/poker-logos/partypoker-logo.jpg";
    //     setUrl(string);
    //     setHref("https://pokerstars.com");

    //     break;

    //   case "PokerStars":
    //     var string = "/media/poker-logos/pokerstars-logo.jpg";
    //     setUrl(string);
    //     setHref("https://pokerstars.com");
    //     break;

    //   case "SkyPoker":
    //     var string = "/media/poker-logos/skypoker-logo.jpg";
    //     setUrl(string);
    //     setHref("https://skypoker.com");
    //     break;

    //   case "888Poker":
    //     var string = "/media/poker-logos/888poker-logo.png";
    //     setUrl(string);
    //     setHref("https://888poker.com");
    //     break;

    //   case "FullTilt":
    //     var string = "/media/poker-logos/fulltilt-logo.png";
    //     setUrl(string);
    //     setHref("https://fullltilt.com");
    //     break;
    // }
  }, [obj]);

  return (
    <div className="card">
      {/* begin::Body */}
      <div className="card-body d-flex flex-column">
        <div className="flex-grow-1 pb-5">
          {/* begin::Info */}
          <div className="align-items-center ">
            <Row>
              <Col lg={6}>
                <Form inline style={{ float: "left" }}>
                  <h4>
                    {" "}
                    <Badge
                      variant="success"
                      style={{ fontSize: "12px", fontWeight: "200" }}
                    >
                      #{obj.sharkscope_id}
                    </Badge>
                  </h4>

                  <h4 style={{ marginLeft: "10px" }}>
                    {" "}
                    <Badge
                      variant="secondary"
                      style={{ fontSize: "12px", fontWeight: "200" }}
                    >
                      {obj.scheduledStartUnixTime*1000}
                    </Badge>
                  </h4>
                </Form>
              </Col>
              <Col lg={6}>
                <div className="symbol symbol-50" style={{ float: "right" }}>
                  <span className="symbol-label bg-light-light">
                    <img
                      src={toAbsoluteUrl(icon)}
                      className="h-50 align-self-center"
                    ></img>{" "}
                  </span>
                </div>
              </Col>
            </Row>
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

        {/* end::Team */}

        {/* begin::Row */}
        <Row>
          <Col lg={6}>
            <span>FLAGS</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.flags || ""}
            </span>
          </Col>
          <Col lg={6}>
            <span>CURRENCY</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.currency || ""}
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col lg={6}>
            <span>GAME</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.game || ""}
            </span>
          </Col>
          <Col lg={6}>
            <span>GAME CLASS</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.gameClass || ""}
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col lg={6}>
            <span>GUARANTEE</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.guarentee || "-"}
            </span>
          </Col>
          <Col lg={6}>
            <span>OVERLAY</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.overlay || "-"}
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col lg={6}>
            <span>PLAYERS</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.playerParTable || "-"}
            </span>
          </Col>
          <Col lg={6}>
            <span>STATE</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.state || "-"}
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col lg={6}>
            <span>RAKE</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.rake || "-"}
            </span>
          </Col>
          <Col lg={6}>
            <span>STAKE</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.stake || "-"}
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col lg={6}>
            <span>CURRENT ENTRANTS</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.currentEntrants || "-"}
            </span>
          </Col>
          <Col lg={6}>
            <span>TOTAL ENTRANTS</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.totalEntrants || "-"}
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col lg={6}>
            <span>STRUCTURE</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.structure || "-"}
            </span>
          </Col>
          <Col lg={6}>
            <span>LAST UPDATED</span> <br />
            <span className="font-size-sm text-muted font-weight-bold">
              {obj.lastUpdateTime || "-"}
            </span>
          </Col>
        </Row>

        {/* end::Row */}
        <Row style={{ marginTop: "15px" }}>
          <Col lg={12}>
            <a href={url} target="_blank" style={{ float: "left" }}>
              <Button variant={"secondary"}>
                {obj.network}{" "}
                <i
                  style={{ fontSize: "12px", marginLeft: "5px" }}
                  class="fas fa-external-link-alt"
                ></i>
              </Button>
            </a>

            <a href={url} target="_blank" style={{ marginLeft: "15px" }}>
              <Button variant={"secondary"}>
                Add To
                <i
                  style={{ fontSize: "12px", marginLeft: "5px" }}
                  class="fas fa-calendar-check"
                ></i>
              </Button>
            </a>
          </Col>
        </Row>
      </div>
      {/* end::Body */}
    </div>
  );
}
