import { Box, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Card,
  Badge,
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import API from "../../apiUrl.json";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import SVG from "react-inlinesvg";

const InboxPage = () => {
  const [Redirect, setRedirect] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [role, setRole] = useState(null);

  const [Chats, setChats] = useState([]);

  const [NewMessage, setNewMessage] = useState("");

  const [ActiveChat, setActiveChat] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userInfo") === undefined) {
      setRedirect(true);
    } else {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      setRole(localStorage.getItem("role"));
    }
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //console.log(userInfo);
    const role = localStorage.getItem("role");

    fetch(API.baseUrl + API.getConversations, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: role === "player" ? userInfo.player_id : userInfo.sponsor_id,
        type: role,
      }),
    })
      .then((json) => json.json())
      .then((res) => {
        console.log(res);
        if (res.status === "ok") {
          setChats(res.chats);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, []);

  const selectedChat = (index) => {
    var chat = Chats[index];

    setActiveChat(chat);
  };

  const createAMessage = () => {
    var message = {
      user: {
        user_id: role === "player" ? userInfo.player_id : userInfo.sponsor_id,
        user_name:
          role === "player" ? userInfo.player_name : userInfo.sponsor_name,
        user_type: role,
      },
      type: "text",
      content: NewMessage,
      generated: Date.now(),
      status: "A",
    };

    console.log(message);
    var chatObj = ActiveChat;
    var oldChat = JSON.parse(ActiveChat.chat.messages);

    oldChat.push(message);

    chatObj.chat.messages = JSON.stringify(oldChat);

    setActiveChat(chatObj);
    setNewMessage("");
    console.log(ActiveChat);
  };
  return (
    <Paper style={{ minHeight: "600px" }}>
      <Row style={{ paddingLeft: "12px", height: "600px" }}>
        <Col lg={4} style={{ borderRight: "1px solid #c4c4c4" }}>
          <Row>
            <Col style={{ padding: "0" }}>
              <div
                style={{
                  padding: "10px",
                  borderTopLeftRadius: "3px",
                  backgroundColor: "#ededed",
                }}
              >
                <Row>
                  <Col>
                    <Image
                      style={{ height: "40px", width: "40px" }}
                      src={toAbsoluteUrl("/media/users/100_1.jpg")}
                      roundedCircle
                    />
                  </Col>

                  <div
                    className="col-auto"
                    style={{
                      float: "right",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <span style={{}}>
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </div>
                  <div
                    className="col-auto"
                    style={{
                      float: "right",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <span style={{}}>
                      <i class="fas fa-ellipsis-v"></i>
                    </span>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              borderBottom: "1px solid c4c4c4",
            }}
          >
            <Col style={{ padding: "0" }}>
              <Form style={{ padding: "15px" }}>
                <Form.Control type="text" placeholder="Search" />
              </Form>
            </Col>
          </Row>
          <Row style={{ minHeight: "400px" }}>
            <Col style={{ padding: "0" }}>
              {" "}
              {Chats.map((chat, index) => {
                return (
                  <div
                    onClick={() => selectedChat(index)}
                    style={{ padding: "15px", background: "#FFF" }}
                  >
                    <Image
                      style={{ height: "40px", width: "40px" }}
                      src={toAbsoluteUrl("/media/users/default.jpg")}
                      roundedCircle
                    />

                    <Typography variant="body" style={{ marginLeft: "15px" }}>
                      {chat.tournamentDetails.name}
                    </Typography>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
        <Col
          lg={8}
          style={{ paddingLeft: "0", paddingRight: "12px", height: "600px" }}
        >
          {ActiveChat !== null ? (
            <div style={{ height: "600px" }}>
              <Row>
                <Col lg={12}>
                  <ChatHeader info={ActiveChat.tournamentDetails} />
                </Col>
              </Row>
              <Row style={{ marginTop: "20px", height: "450px" }}>
                <Col style={{ padding: "20px" }} lg={12}>
                  <ActiveChatComponent
                    Chat={ActiveChat}
                    userInfo={userInfo}
                    role={role}
                  />
                </Col>
              </Row>
              <Row style={{ alignSelf: "end" }}>
                <Col style={{ padding: "20px" }} lg={10}>
                  <Form.Control
                    type="text"
                    value={NewMessage}
                    placeholder="Type message here..."
                    onKeyPress={(e) =>
                      e.key === "Enter" ? createAMessage() : null
                    }
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </Col>
                <Col lg={2} style={{ paddingRight: "40px" }}>
                  {" "}
                  <Button
                    variant="success"
                    style={{ marginTop: "20px", float: "right" }}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </div>
          ) : null}
        </Col>
      </Row>
    </Paper>
  );
};

export default InboxPage;

const ActiveChatComponent = ({ Chat, userInfo, role }) => {
  useEffect(() => {}, [Chat]);
  function getDates(date) {
    // var today = new Date(date);
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // var yyyy = today.getFullYear();

    var time = new Date(date * 1000);
    time.toLocaleString("en-IN");
    var messsageTime =
      time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    return messsageTime;
  }
  return (
    <div>
      {JSON.parse(Chat.chat.messages).map((message) => {
        return (
          <Row>
            <Col>
              {message.user.user_id ===
              (role === "player" ? userInfo.player_id : userInfo.sponsor_id) ? (
                <div style={{ float: "right" }}>
                  <Badge
                    style={{ padding: "10px", textAlign: "left" }}
                    variant="primary"
                  >
                    <Typography variant="body1" className="text-normal">
                      {message.content}
                    </Typography>
                  </Badge>
                  <br></br>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{
                      marginLeft: "5px",
                      fontSize: "10px",
                      marginTop: "10px",
                    }}
                  >
                    {getDates(message.generated)}
                  </Typography>
                </div>
              ) : (
                <div style={{ float: "left" }}>
                  <Badge
                    style={{ padding: "10px", textAlign: "left" }}
                    variant="secondary"
                  >
                    {message.user === "admin" ? (
                      <Typography variant="button" className="text-danger">
                        {message.user}
                      </Typography>
                    ) : (
                      <Typography variant="button" className="text-danger">
                        {message.user.user_name}
                      </Typography>
                    )}

                    <br />

                    <Typography variant="body1" className="text-normal">
                      {message.content}
                    </Typography>
                  </Badge>
                  <br></br>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{
                      marginLeft: "5px",
                      fontSize: "10px",
                      marginTop: "10px",
                    }}
                  >
                    {getDates(message.generated)}
                  </Typography>
                </div>
              )}
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

// const UserHeader = () => {
//   return (

//   );
// };

const ChatHeader = ({ info }) => {
  return (
    <div
      style={{
        padding: "10px",
        borderTopRightRadius: "3px",
        backgroundColor: "#ededed",
      }}
    >
      <Row>
        <Col lg={12}>
          <Image
            style={{ height: "40px", width: "40px", float: "left" }}
            src={toAbsoluteUrl("/media/users/default.jpg")}
            roundedCircle
          />

          <div
            style={{
              float: "left",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            <span>{info.name}</span>
          </div>
          <div
            style={{
              float: "right",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginRight: "10px",
            }}
          >
            <span style={{ marginRight: "20px" }}>
              <i class="fas fa-plus-circle"></i>
            </span>

            <span style={{ marginRight: "10px" }}>
              <i class="fas fa-ellipsis-v"></i>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};
