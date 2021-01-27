import { Box, Typography } from "@material-ui/core";
import { RowingRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import API from "../../../apiUrl.json";
import { Collapse } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

const ContactUsPage = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState();
  const [goAhead, setGoAhead] = useState(false);
  const [showAlert, setShowAlert] = useState(false);




  const handleContactUs = (e) => {
    // console.log(email);
    e.preventDefault();
    if(goAhead && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        hitApiForContact()
    }else{
      setShowAlert(true);
    }
  }

  async function hitApiForContact(params) {
     
  }

  return (
    <div>
      <Box>
        <Row>
          <Col lg={12}>
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <Row>
                  <Col lg={6}>
                    <div
                      className="d-flex flex-column justify-content-start"
                      style={{ paddingLeft: "20px" }}>
                      <Typography
                        variant="h1"
                        style={{
                          color: "black",
                          fontWeight: "600",
                          fontSize: "40px",
                          marginTop: "20px",
                        }}>
                        Contact us
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ marginTop: "30px", color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae.
                      </Typography>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="d-flex align-items-center justify-content-center">
                      <Image
                        src={toAbsoluteUrl("/media/banners/contact-us.svg")}
                        style={{ width: "350px", height: "250px" }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={8}>
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <div className="contact-form">
                  <h2 className="subtitle pb-5">Send Us A Message </h2>
                  <form action="">
                    <div className="row">
                      <div class="col pl-0 pr-0 m-5">
                        <input
                          type="text"
                          className="form-control h-auto py-5 px-6"
                          placeholder="Name"
                          name="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div class="col pl-0 pr-0 m-5">
                        <input
                          type="email"
                          className="form-control h-auto py-5 px-6"
                          placeholder="Eg. example@email.com"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div class="col pl-0 pr-0 m-5">
                        <input
                          type="text"
                          className="form-control h-auto py-5 px-6"
                          placeholder="Phone"
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div class="col pl-0 pr-0 m-5">
                        <textarea
                          class="form-control form-control-sm mb-3"
                          rows="8"
                          placeholder="Message"
                          name="message"
                          onChange={(e) =>
                            setMessage(e.target.value)
                          }></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col pl-0 pr-0 m-5">
                        <Button
                          variant="success"
                          type="submit"
                          onClick={(e) => handleContactUs(e)}
                          style={{
                            height: "50px",
                            fontSize: "14px",
                            width: "150px",
                          }}>
                          Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div
              className="d-flex align-items-center justify-content-start"
              style={{ padding: "10px" }}>
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                  <Row>
                    <Col lg={12} className="p-5">
                      <h3>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        Address
                      </h3>
                      <span>Dummy Street , UK</span>
                      <hr />
                    </Col>
                    <Col lg={12} className="p-5">
                      <h3>
                        <i className="fa fa-phone-alt" aria-hidden="true"></i>{" "}
                        Lets Talk{" "}
                      </h3>
                      <span>+1 800 1236879</span>
                      <hr />
                    </Col>

                    <Col lg={12} className="p-5">
                      <h3>
                        <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                        General Support{" "}
                      </h3>
                      <span>contact@example.com </span>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Box>
    </div>
  );
};

export default ContactUsPage;
