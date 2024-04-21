import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

export const Logo = ({ size = 25 }: { size?: number }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Typography fontSize={size} color={"lavender"}>
        Ø
      </Typography>
      <Typography fontSize={size} color={"skyblue"}>
        x
      </Typography>
      <Typography fontSize={size} color={"coral"}>
        P
      </Typography>
      <Typography fontSize={size} color={"cyan"}>
        u
      </Typography>
      <Typography fontSize={size} color={"lightblue"}>
        b
      </Typography>
      <Typography fontSize={size} color={"darkTurquoise"}>
        l
      </Typography>
      <Typography fontSize={size} color={"lightpink"}>
        i
      </Typography>
      <Typography fontSize={size} color={"lightskyblue"}>
        s
      </Typography>
      <Typography fontSize={size} color={"lavender"}>
        h
      </Typography>
    </Box>
  );
};
