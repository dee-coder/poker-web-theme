/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { Tab, Nav } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import API from "../../apiUrl.json";

export function NotificationsToggle() {
  const [selectedTab, setSelectedTab] = useState("All");
  const [Notifications, setNotifications] = useState([]);

  useEffect(() => {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    var Role = localStorage.getItem("role");
    //console.log(userInfo, Role);
    var idRole = Role === "player" ? userInfo.player_id : userInfo.sponsor_id;
    fetch(API.baseUrl + API.AllNotifications + "/" + idRole, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((json) => json.json())
      .then((data) => {
        console.log(data, "notifcations");
        setNotifications(data.notifications);
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  }, []);
  const setTab = (_tabName) => {
    setSelectedTab(_tabName);
  };

  const styles = {};

  return (
    <div style={{ paddingLeft: "100px", background: "transparent" }}>
      <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10">
        <Tab.Container defaultActiveKey={selectedTab}>
          {/*begin::Header*/}
          <div
            className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5"
            style={{ overflowY: "scroll" }}
          >
            <Nav
              onSelect={setTab}
              as="ul"
              role="tablist"
              className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
            >
              <Nav.Item as="li">
                <Nav.Link
                  eventKey="All"
                  className={`nav-link ${
                    selectedTab === "All" ? "active" : ""
                  }`}
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Tournaments"
                  className={`nav-link ${
                    selectedTab === "Tournaments" ? "active" : ""
                  }`}
                >
                  Tournaments
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  eventKey="System"
                  className={`nav-link ${
                    selectedTab === "System" ? "active" : ""
                  }`}
                >
                  Urgent Notifications
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div
              className="offcanvas-close mt-n1 pr-5"
              style={{ position: "absolute", top: "15px", right: "10px" }}
            >
              <a
                href="#"
                className="btn btn-xs btn-icon btn-light btn-hover-primary"
                id="kt_quick_panel_close"
              >
                <i className="ki ki-close icon-xs text-muted"></i>
              </a>
            </div>
          </div>
          {/*end::Header*/}

          {/*begin::Content*/}
          <div className="offcanvas-content px-10">
            <div className="tab-content">
              <div
                id="kt_quick_panel_logs"
                role="tabpanel"
                className={`tab-pane fade pt-3 pr-5 mr-n5 scroll ps ${
                  selectedTab === "All" ? "active show" : ""
                }`}
              >
                <div className="mb-15">
                  <h5 className="font-weight-bold mb-5">Notifications</h5>
                  {Notifications.length === 0 && (
                    <span className="text-muted font-size-sm">
                      No new notifications.
                    </span>
                  )}
                  {Notifications.map((not) => {
                    return (
                      <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                        <span className="svg-icon svg-icon-warning mr-5">
                          <SVG
                            src={toAbsoluteUrl(
                              "/media//svg/icons/Home/Library.svg"
                            )}
                            className="svg-icon svg-icon-lg"
                          ></SVG>
                        </span>

                        <div className="d-flex flex-column flex-grow-1 mr-2">
                          <span className="text-muted font-size-sm">
                            {not.type}
                          </span>
                          <a
                            href={not.links}
                            target="_blank"
                            className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            {not.content}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                id="kt_quick_panel_notifications"
                role="tabpanel"
                className={`tab-pane fade pt-2 pr-5 mr-n5 scroll ps ${
                  selectedTab === "Tournaments" ? "active show" : ""
                }`}
              >
                <div className="navi navi-icon-circle navi-spacer-x-0">
                  {/* <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-bell text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold font-size-lg">
                          5 new user generated report
                        </div>
                        <div className="text-muted">Reports based on sales</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-box text-danger icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          2 new items submited
                        </div>
                        <div className="text-muted">by Grog John</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-psd text-primary icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          79 PSD files generated
                        </div>
                        <div className="text-muted">Reports based on sales</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-supermarket text-warning icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          $2900 worth producucts sold
                        </div>
                        <div className="text-muted">Total 234 items</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-paper-plane-1 text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          4.5h-avarage response time
                        </div>
                        <div className="text-muted">Fostest is Barry</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-safe-shield-protection text-danger icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          3 Defence alerts
                        </div>
                        <div className="text-muted">
                          40% less alerts thar last week
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-notepad text-primary icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          Avarage 4 blog posts per author
                        </div>
                        <div className="text-muted">Most posted 12 time</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-users-1 text-warning icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          16 authors joined last week
                        </div>
                        <div className="text-muted">
                          9 photodrapehrs, 7 designer
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-box text-info icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          2 new items have been submited
                        </div>
                        <div className="text-muted">by Grog John</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-download text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          2.8 GB-total downloads size
                        </div>
                        <div className="text-muted">
                          Mostly PSD end AL concepts
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon2-supermarket text-danger icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          $2900 worth producucts sold
                        </div>
                        <div className="text-muted">Total 234 items</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-bell text-primary icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          7 new user generated report
                        </div>
                        <div className="text-muted">Reports based on sales</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="navi-item">
                    <div className="navi-link rounded">
                      <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                          <i className="flaticon-paper-plane-1 text-success icon-lg"></i>
                        </div>
                      </div>
                      <div className="navi-text">
                        <div className="font-weight-bold  font-size-lg">
                          4.5h-avarage response time
                        </div>
                        <div className="text-muted">Fostest is Barry</div>
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>
              <div
                id="kt_quick_panel_settings"
                role="tabpanel"
                className={`tab-pane fade pt-3 pr-5 mr-n5 scroll ps ${
                  selectedTab === "System" ? "active show" : ""
                }`}
              >
                <div className="mb-15">
                  <h5 className="font-weight-bold mb-5">Urgent</h5>

                  <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                    <span className="svg-icon svg-icon-warning mr-5">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media//svg/icons/Home/Library.svg"
                        )}
                        className="svg-icon svg-icon-lg"
                      ></SVG>
                    </span>

                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <a
                        href="#"
                        className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Another purpose persuade
                      </a>
                      <span className="text-muted font-size-sm">
                        Due in 2 Days
                      </span>
                    </div>

                    <span className="font-weight-bolder text-warning py-1 font-size-lg">
                      +28%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end::Content*/}
        </Tab.Container>
      </div>
    </div>
  );
}
