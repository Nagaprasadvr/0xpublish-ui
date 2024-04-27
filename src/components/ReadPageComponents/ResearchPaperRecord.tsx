import { KeyValueTypography } from "@/utils/helpers";
import { ResearchPaperRecord } from "@/utils/types";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

export const ResearchPaperRecordComponent = ({
  ...props
}: ResearchPaperRecord) => {
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
        height: "40vh",
        width: "40vw",
        borderRadius: "10px",
        backgroundColor: "transparent",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        border: "2px solid #87cefa",
        overflowY: "auto",
        overflowX: "hidden",
        "@media (max-width: 1500px)": {
          width: "80vw",
          height: "38vh",
        },
        "@media (max-width: 800px)": {
          width: "80vw",
          height: "80vh",
        },
      }}
    >
      <KeyValueTypography keyName={"Name"} value={name}></KeyValueTypography>
      <KeyValueTypography
        keyName={"Paper ID"}
        value={paperId}
      ></KeyValueTypography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          mt: "20px",
          mb: "20px",
        }}
      >
        <Image
          src="/svg/incognito.svg"
          height={200}
          width={200}
          alt={"image"}
        ></Image>
      </Box>
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
    </Box>
  );
};
