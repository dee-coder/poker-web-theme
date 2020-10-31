import { Box, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Row, Card } from "react-bootstrap";
import API from "../../apiUrl.json";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PlayerPlusPage = () => {
  const [plans, setplans] = useState([]);
  const [userInfo, setInfo] = useState();
  const [role, setRole] = useState();
  useEffect(() => {
    fetch(API.baseUrl + API.getPlayersPlans, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setplans(json.list);
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const role = localStorage.getItem("role");
        setInfo(userInfo);
        setRole(role);
        //console.log(userInfo);
        setInfo(userInfo);
      })
      .catch((err) => console.log(err));

    //console.log(userInfo);
  }, []);

  const makeRequestToPayment = async (e, id, plan_id) => {
    e.preventDefault();
    const stripe = await stripePromise;
    await fetch(API.baseUrl + API.paymentSession, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: id,
        uid: userInfo.player_id,
        type: role,
        plan: plan_id,
      }),
    })
      .then((res) => res.json())
      .then(async (session) => {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Paper style={{ padding: "30px" }}>
        <Row>
          <Col lg={12} style={{ textAlign: "center" }}>
            <h4> Player Plus</h4>
          </Col>
        </Row>
        <Row>
          {plans.map((plan) => {
            return (
              <Col lg={6}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col>
                        <div>
                          <h1>
                            <strong>
                              {" "}
                              {plan.currency}
                              {plan.plan_amount}
                            </strong>
                          </h1>
                          {plan.subscription_type === "Annualy"
                            ? "/ year"
                            : "/ month"}
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                      <Col>
                        <div>
                          <h1>{plan.title}</h1>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                      <Col lg={6} style={{ textAlign: "left" }}>
                        <span>{plan.description}</span>
                      </Col>
                      <Col lg={6} style={{ textAlign: "right" }}>
                        <Badge variant="primary">
                          <span>{plan.subscription_type}</span>
                        </Badge>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                      <Col lg={12}>
                        <Button
                          style={{ minWidth: "100%" }}
                          onClick={(e) =>
                            makeRequestToPayment(
                              e,
                              plan.stripe_product_id,
                              plan.id
                            )
                          }
                        >
                          Get This Plan{" "}
                          <strong>
                            {plan.currency} {plan.plan_amount}
                          </strong>
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Paper>
    </Box>
  );
};

export default PlayerPlusPage;