import React from "react";
import SideNav from "../components/SideNav";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import "../Dash.css";
import GeoChartt from "../charts/GeoChartt";
import Piechar from "../charts/Piechar";
import Bar2chart from "../charts/Bar2chart";
import CountUp from "react-countup";
export default function Analytics() {
  return (
    <div className="analyticbg">
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <h1>Analytics
            bar chart
          </h1> */}
          <Grid container spacing={0}>
            <Box direction="row">
              <Grid item xs={0} style={{ margin: " 10px" }}>
                <Card sx={{ maxWidth: 200, height: 100 }} className="textcolor">
                  <CardContent className="texttitle">
                    <Typography gutterBottom variant="body2" component="div">
                      Visitors
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      <CountUp delay={0.2} end={22000} duration={0.3} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={0} style={{ margin: " 10px" }}>
                <Card sx={{ maxWidth: 200, height: 100 }} className="textcolor">
                  <CardContent className="texttitle">
                    <Typography gutterBottom variant="body2" component="div">
                      Visitors
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      <CountUp delay={0.3} end={20000} duration={0.4} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Box>

            <Box direction="row">
              <Grid item xs={0} style={{ margin: " 10px" }}>
                <Card
                  sx={{ maxWidth: 200, height: 100 }}
                  className="textcolor2"
                >
                  <CardContent className="texttitle">
                    <Typography gutterBottom variant="body2" component="div">
                      Visitors
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      <CountUp delay={0.2} end={22000} duration={0.3} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={0} style={{ margin: " 10px" }}>
                <Card
                  sx={{ maxWidth: 200, height: 100 }}
                  className="textcolor2"
                >
                  <CardContent className="texttitle">
                    <Typography gutterBottom variant="body2" component="div">
                      Visitors
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      <CountUp delay={0.3} end={32000} duration={0.4} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Box>

            <Grid item xs={8}>
              <Card sx={{ maxWidth: 900, height: 220 }}>
                <CardContent>
                  <Bar2chart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 700, height: 300 }}>
                <CardContent>
                  <GeoChartt />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 300, height: 300 }}>
                <CardContent>
                  <Piechar />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
