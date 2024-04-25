import { KeyValueTypography } from "@/utils/helpers";
import { ResearchPaperRecord } from "@/utils/types";
import { Box, useMediaQuery } from "@mui/material";

export const ResearchPaperRecordComponent = ({
  ...props
}: ResearchPaperRecord) => {
  const mediumScreen = useMediaQuery("(max-width: 1500px)");
  const {
    name,
    paperId,
    domain,
    description,
    authorName,
    upVotes,
    accessFee,
    image,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: "20px",
        gap: "10px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: mediumScreen ? "fit-content" : "40vh",
        width: mediumScreen ? "100%" : "40vw",
        borderRadius: "10px",
        backgroundColor: "transparent",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        border: "2px solid #87cefa",
      }}
    >
      <KeyValueTypography keyName={"Name"} value={name}></KeyValueTypography>
      <KeyValueTypography
        keyName={"Paper ID"}
        value={paperId}
      ></KeyValueTypography>

      <KeyValueTypography
        keyName={"Domain"}
        value={domain}
      ></KeyValueTypography>
      <KeyValueTypography
        keyName={"Description"}
        value={description}
      ></KeyValueTypography>
      <KeyValueTypography
        keyName={"Author Name"}
        value={authorName}
      ></KeyValueTypography>
      <KeyValueTypography
        keyName={"Up Votes"}
        value={upVotes}
      ></KeyValueTypography>
      <KeyValueTypography
        keyName={"Access Fee"}
        value={accessFee.toLocaleString()}
      ></KeyValueTypography>
      <KeyValueTypography keyName={"Image"} value={image}></KeyValueTypography>
    </Box>
  );
};