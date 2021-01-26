import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 210,
  },
  fullHeightCard: {
    height: "100%",
    },
});

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  useEffect(() => {
      async function loadPosts() {
          const response = await fetch('https://codifiedweb.com//wp-json/wp/v2/posts?_embed&per_page=20');
          if(!response.ok) {
              // oups! something went wrong
              return;
          }
          const posts = await response.json();
          setPosts(posts);
          console.log(posts);
      }
  
      loadPosts();
 }, [])

return (
  <Box>
  <Row>
  <Col lg={12}>
    <div className="card shadow p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <Row>
          <Col lg={6}>
            <div
              className="d-flex flex-column justify-content-start"
              style={{ paddingLeft: "20px" }}
            >
              <Typography
                variant="h1"
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "40px",
                  marginTop: "20px",
                }}
              >
                Blog
              </Typography>
              <Typography
                variant="body1"
                style={{ marginTop: "30px", color: "black" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae.
              </Typography>
              
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src={toAbsoluteUrl("/media/banners/blogs.jpg")}
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
    {posts.map((post, index) => (
    
    <Grid item xs={4} key={index}>
      <Card className={classes.fullHeightCard}>
      <CardActionArea>
   
      <CardMedia
      className={classes.media}
      image={post._embedded['wp:featuredmedia'] === undefined ? `/media/banners/image-placeholder_3x2.svg ` : post._embedded['wp:featuredmedia'][0].source_url} 
      title={post.title.rendered}
    /> 
                <CardContent>
              <Typography
                  variant="h6"
                  color="textSecondary"
                  gutterBottom
                  dangerouslySetInnerHTML={{__html: post.title.rendered}} />
              <Typography
                  variant="body2"
                  component="p"
                  dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
          </CardContent>
          </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={`/blog/${post.slug}`} >
          Read More
        </Button>
      </CardActions>
      </Card>
    </Grid>
   ))}
  </Grid>
  </Box>

);
}