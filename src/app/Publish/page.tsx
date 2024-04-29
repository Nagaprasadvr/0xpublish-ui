"use client";
import { PublishPageInput } from "@/components/PublishPageComponents/PublishPageInput";
import { Box } from "@mui/material";

const Publish = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PublishPageInput />
    </Box>
  );
};

export default Publish;
