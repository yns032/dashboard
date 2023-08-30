import React from "react";
import SideNav from "../components/SideNav";
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../Dash.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccordionDash from "../components/AccordionDash";
import BarChartss from "../charts/BarChartss";
import CountUp from "react-countup";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="homebg">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 140 }}
                    className="textcolor"
                  >
                    <CardContent>
                      <div className="iconcolor">
                        <CreditCardIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <span>$</span>
                        <CountUp delay={0.2} end={500} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 140 }}
                    className="textcolor2"
                  >
                    <CardContent>
                      <div className="iconcolor">
                        <ShoppingBagIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <span>$</span>
                        <CountUp delay={0.3} end={900.0} duration={0.4} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Order
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="textcolor2">
                    <Stack spacing={2} direction="row">
                      <div className="homeIcons">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="homeprice">$203K</span>
                        <br />
                        <span className="hometitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className="homeIcons">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="homeprice">$203K</span>
                        <br />
                        <span className="hometitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>

              <Box height={20} />
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChartss />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Typography variant="h6">Proje product</Typography>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
}
