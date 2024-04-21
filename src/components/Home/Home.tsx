import React from "react";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "600px",
        overflow: "auto",
        gap: "10px",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Typography variant="h2" gutterBottom color={"primary"}>
        Welcome to Øxpublish
      </Typography>
      <Typography variant="body1" gutterBottom>
        Empowering Research Publishing on Solana and Arweave
      </Typography>

      <Box>
        <Typography variant="h4" gutterBottom>
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
        sx={{
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        Join us in revolutionizing research publishing. Explore cutting-edge
        research, share your insights, and be part of a decentralized future
        with Øxpublish on Solana and Arweave.
      </Typography>
    </Box>
  );
};

export default Home;
