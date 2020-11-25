import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Row, Col, Button, Image, Badge } from "react-bootstrap";
import API from "../../apiUrl.json";

const PendingSponsorsItemsChip = ({
  sponsor,
  sponsorship_id,
  removeRequesRow,
}) => {
  const [Loading, ShowLoading] = useState(false);
  const [AddedForSponsorship, setAddedForSponsorship] = useState(false);
  const [AlertForFailed, setAlertForFailed] = useState(false);

  const handleRejectRequest = (e) => {
    e.preventDefault();
    ShowLoading(true);
    fetch(API.baseUrl + API.rejectPendingSponsorship, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sponsor_id: sponsor.sponsor_id,
        sponsorship_id: sponsorship_id,
      }),
    })
      .then((json) => json.json())
      .then((res) => {
        ShowLoading(false);
        if (res.status === "ok") {
          removeRequesRow(sponsor);
        } else {
          alert(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  const handleApprovRequest = (e) => {
    e.preventDefault();
    ShowLoading(true);
    fetch(API.baseUrl + API.approvePendingSponsorship, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sponsor_id: sponsor.sponsor_id,
        sponsorship_id: sponsorship_id,
      }),
    })
      .then((json) => json.json())
      .then((res) => {
        ShowLoading(false);
        if (res.status === "ok") {
          setAddedForSponsorship(true);
        } else {
          setAddedForSponsorship(false);
          setAlertForFailed(true);
          alert(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  if (AddedForSponsorship) {
    return (
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <div className="card" style={{ padding: "20px" }}>
            <Row>
              <Col>
                <Image
                  src="media/users/100_4.jpg"
                  roundedCircle
                  style={{ width: "40px", height: "40px" }}
                />
                <Typography
                  variant="body"
                  style={{ fontSize: "13px", marginLeft: "15px" }}
                >
                  {sponsor.sponsor_name}
                </Typography>
                <div style={{ float: "right" }}>
                  <Typography variant="body" style={{ color: "green" }}>
                    Added! ✅
                  </Typography>
                  <Badge variant="secondary" style={{ marginLeft: "20px" }}>
                    <i class="fas fa-times"></i>
                  </Badge>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <div className="card" style={{ padding: "20px" }}>
            <Row>
              <Col>
                <Image
                  src="media/users/100_4.jpg"
                  roundedCircle
                  style={{ width: "40px", height: "40px" }}
                />
                <Typography
                  variant="body"
                  style={{ fontSize: "13px", marginLeft: "15px" }}
                >
                  {sponsor.sponsor_name}
                </Typography>
                <div style={{ float: "right" }}>
                  {Loading ? (
                    <div>
                      <Button
                        variant="outline-primary"
                        style={{ border: "none" }}
                        disabled
                      >
                        Reject{" "}
                      </Button>

                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <Button
                        variant="outline-primary"
                        style={{ border: "none" }}
                        onClick={(e) => handleRejectRequest(e)}
                      >
                        Reject{" "}
                      </Button>
                      <Button
                        variant="primary"
                        style={{ marginLeft: "20px" }}
                        onClick={(e) => handleApprovRequest(e)}
                      >
                        Accept
                      </Button>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
};

export default PendingSponsorsItemsChip;
