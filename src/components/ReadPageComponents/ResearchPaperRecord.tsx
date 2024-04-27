import { KeyValueTypography } from "@/utils/helpers";
import { ResearchPaperRecord } from "@/utils/types";
import { Box, Button, useMediaQuery } from "@mui/material";
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
        gap: "20px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "65vh",
        width: "25vw",
        borderRadius: "10px",
        backgroundColor: "transparent",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        border: "2px solid #87cefa",
        "@media (max-width: 1500px)": {
          width: "40vw",
          height: "65vh",
        },
        "@media (max-width: 800px)": {
          width: "80vw",
          height: "85vh",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          mt: "20px",
          mb: "20px",
        }}
      >
        <Image src={image} height={200} width={200} alt={"image"}></Image>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
          gap: "10px",
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
          value={accessFee.toLocaleString() + " SOL"}
        ></KeyValueTypography>
      </Box>
      <Button
        sx={{
          width: "100%",
        }}
      >
        Get Access
      </Button>
    </Box>
  );
};
