"use client";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../Logo/Logo";
import { Wallet } from "./Wallet";
import { MobileNav } from "./MobileNav";
import React, { useEffect } from "react";

export const NavLinks = [
  { name: "Home", link: "/", color: "lightgreen" },
  { name: "Publish", link: "/Publish", color: "cyan" },
  { name: "Read", link: "/Read", color: "lightblue" },
];

export const Navbar = () => {
  const { breakpoints } = useTheme();
  const mobileScreen = useMediaQuery(breakpoints.down("md"));

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        position: "sticky",
        top: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "50px",
          backgroundColor: "transparent",
          backdropFilter: "blur(30px)",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap="10px"
            ml="10px"
            width={mobileScreen ? "10%" : "20%"}
            minWidth={"250px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
            }}
          >
            <Logo size={30} />
          </Box>

          <Box
            sx={{
              display: mobileScreen ? "none" : "flex",
              gap: "10px",
              justifyContent: "center",
              paddingRight: "20px",
            }}
          >
            {NavLinks.map((nav) => (
              <Link
                href={nav.link}
                key={nav.name}
                style={{
                  width: "auto",
                }}
              >
                <Button
                  sx={{
                    color: nav.color,
                    backgroundColor: "black",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {nav.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>

        {isLoading ? (
          <Box
            sx={{
              p: "10px",
            }}
          >
            <CircularProgress
              size={30}
              thickness={6}
              sx={{
                color: "primary",
              }}
            />
          </Box>
        ) : mobileScreen ? (
          <Box
            sx={{
              display: mobileScreen ? "flex" : "none",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <MobileNav />
          </Box>
        ) : (
          <Box
            display={mobileScreen ? "none" : "flex"}
            sx={{
              mr: "20px",
              ml: "20px",
            }}
          >
            <Wallet setOpen={null} />
          </Box>
        )}
      </Box>
      <Divider
        sx={{
          borderBottomWidth: "3px",
          // ml: "-10px",
          // mr: "-10px",
        }}
      />
    </nav>
  );
};
