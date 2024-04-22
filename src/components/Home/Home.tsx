"use client";
import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  SxProps,
  Button,
} from "@mui/material";
const mobileStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  gap: "10px",
  height: "60vh",
  alignItems: "flex-start",
  marginTop: "50px",
  textWrap: "wrap",
  width: "100%",
};

const Home = () => {
  const { breakpoints } = useTheme();
  const mobileScreen = useMediaQuery(breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={
          mobileScreen
            ? {
                ...mobileStyles,
                marginLeft: "10px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                height: "70vh",
                overflow: "auto",
                gap: "10px",
                alignItems: "center",
                marginTop: "50px",
                width: "100%",
              }
        }
      >
        <Typography
          variant={mobileScreen ? "h4" : "h2"}
          gutterBottom
          color={"primary"}
        >
          Welcome to Øxpublish
        </Typography>
        <Typography variant="body1" gutterBottom>
          Empowering Research Publishing on Solana and Arweave
        </Typography>

        <Box>
          <Typography variant={mobileScreen ? "h5" : "h4"} gutterBottom>
            Why Choose Øxpublish?
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Solana-Powered Scalability"
                secondary="Harnessing the speed and scalability of Solana blockchain for lightning-fast transactions."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Arweave's Permanent Storage"
                secondary="Leveraging Arweave's decentralized storage for tamper-proof archival of research papers."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tokenized Incentives"
                secondary="Earn tokens for contributing quality research, fostering a fair and incentivized ecosystem."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Decentralized Governance"
                secondary="Participate in community-driven decision-making for transparent platform development."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Global Accessibility"
                secondary="Low transaction fees and decentralized hosting for universal access to research papers."
              />
            </ListItem>
          </List>
        </Box>

        <Typography
          variant="body1"
          gutterBottom
          sx={
            mobileScreen
              ? { width: "100%" }
              : { width: "50%", textAlign: "center" }
          }
        >
          Join us in revolutionizing research publishing. Explore cutting-edge
          research, share your insights, and be part of a decentralized future
          with Øxpublish on Solana and Arweave.
        </Typography>
      </Box>
      <Button>Start Publishing</Button>
    </Box>
  );
};

export default Home;
