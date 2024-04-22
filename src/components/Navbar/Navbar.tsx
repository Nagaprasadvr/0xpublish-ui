"use client";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../Logo/Logo";
import { Wallet } from "./Wallet";
import { MobileNav } from "./MobileNav";

export const NavLinks = [
  { name: "Home", link: "/", color: "cyan" },
  { name: "PayChad", link: "/Pay", color: "lightblue" },
  { name: "PayrollHistory", link: "/PayrollHistory", color: "coral" },
  { name: "Chads", link: "/Chads", color: "lightgreen" },
  { name: "AddChads", link: "/AddChads", color: "aquamarine" },
];

export const Navbar = () => {
  const { breakpoints } = useTheme();
  const mobileScreen = useMediaQuery(breakpoints.down("md"));
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "50px",
        zIndex: 1000,
        position: "sticky",
        top: 0,
        backgroundColor: "transparent",
        backdropFilter: "blur(30px)",
        border: "2px solid #36454F",
        borderRadius: "10px",
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

        {/* <Box
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
        </Box> */}
      </Box>

      {!mobileScreen && (
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
      {mobileScreen && (
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
      )}
    </nav>
  );
};
