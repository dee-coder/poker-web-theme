import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { Row,Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import Grid from "@material-ui/core/Grid";

export default function SingleBlog(props) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function loadPost() {
      const response = await fetch(
        "https://codifiedweb.com//wp-json/wp/v2/posts?_embed&slug=" +
          props.match.params.slug
      );

      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const post = await response.json();
      setPost(post);
      console.log(post);
    }
    loadPost();
  }, []);

  return (
    <Box>
      {post.map((single, index) => (
        <div key={index}>
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
                          {single.title.rendered}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            color: "grey",

                            marginTop: "20px",
                          }}>
                          {single._embedded["author"][0].name +
                            "/" +
                            single.date}
                        </Typography>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="d-flex align-items-center justify-content-center">
                        <Image
                          src={
                            single.featured_media == 0
                              ? `/media/banners/image-placeholder_3x2.svg `
                              : single._embedded["wp:featuredmedia"][0]
                                  .media_details.sizes.medium.source_url
                          }
                          style={{ width: "350px", height: "250px" }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Grid container spacing={2}>
            {single.content.rendered}
          </Grid>
        </div>
      ))}
    </Box>
  );
}