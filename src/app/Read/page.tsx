"use client";

import { dummyData } from "@/components/ReadPageComponents/dummyData";
import { ResearchPaperRecordComponent } from "@/components/ReadPageComponents/ResearchPaperRecord";
import { SearchBar } from "@/components/ReadPageComponents/SearchBar";
import { ResearchPaperRecord } from "@/utils/types";
import { Search } from "@mui/icons-material";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const Read = () => {
  const [data, setData] = useState<ResearchPaperRecord[]>([]);
  const mediumScreen = useMediaQuery("(max-width: 1500px)");
  const mobScreen = useMediaQuery("(max-width: 800px)");
  useEffect(() => {
    setData(dummyData);
  }, []);
  const [searchString, setSearchString] = useState<string>("");
  const memoizedData = useMemo(() => {
    if (data?.length === 0) return [];
    if (searchString !== "") {
      return data.filter((record) =>
        record.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }
    return data;
  }, [data, searchString]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: mobScreen ? "column" : "row",
          justifyContent: mobScreen ? "center" : "space-around",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant="h5"
        >
          Research Papers
        </Typography>
        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          coloumnGap: "40px",
          rowGap: "40px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          "@media (max-width: 1500px)": {
            gridTemplateColumns: "repeat(2,1fr)",
          },
          "@media (max-width: 800px)": {
            gridTemplateColumns: "repeat(1,1fr)",
          },
        }}
      >
        {memoizedData.length > 0 ? (
          memoizedData.map((record) => (
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
          <Typography textAlign={"center"} variant="h5">
            No records found
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Read;
