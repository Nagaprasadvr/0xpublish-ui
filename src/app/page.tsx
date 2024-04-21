import Home from "@/components/Home/Home";
import { Box, Button, Typography } from "@mui/material";

export default function Index() {
  return (
    <Box
      className="center"
      sx={{
        flexDirection: "column",
      }}
    >
      {/* <Button>Øxpublish LFG</Button> */}
      <Home />
    </Box>
  );
}
