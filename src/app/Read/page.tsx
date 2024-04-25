"use client";

import { dummyData } from "@/components/ReadPageComponents/dummyData";
import { ResearchPaperRecordComponent } from "@/components/ReadPageComponents/ResearchPaperRecord";
import { ResearchPaperRecord } from "@/utils/types";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState<ResearchPaperRecord[]>([]);
  const mediumScreen = useMediaQuery("(max-width: 1500px)");

  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: mediumScreen ? "repeat(1,1fr)" : "repeat(2, 1fr)",
        coloumnGap: "40px",
        rowGap: "40px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {data.length > 0 ? (
        data.map((record) => (
          <Box
            key={record.paperId}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ResearchPaperRecordComponent {...record} />
          </Box>
        ))
      ) : (
        <Typography variant="h4">No records found</Typography>
      )}
    </Box>
  );
};

export default Read;
