import {
  Box,
  Button,
  Input,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { sha256 } from "js-sha256";
import {
  MAX_ACCESS_FEE,
  MAX_DESCRIPTION_LENGTH,
  MAX_IMAGE_SIZE_IN_BYTES,
  MAX_NAME_LENGTH,
} from "@/utils/constants";
import toast from "react-hot-toast";

const Inputs = [
  "Name",
  "Author",
  "Description",
  "Domain",
  "AccessFee",
  "Image",
  "ResearchPaperPdf",
];

type PublishPageInputs = {
  Name: string;
  Author: string;
  Description: string;
  Domain: string;
  AccessFee: number | string;
  Image: File | null;
  ResearchPaperPdf: File | null;
};

const InputPlaceholderMap = {
  Name: "Research Paper Name",
  Author: "Author Name",
  Description: "Description",
  Domain: "Domain",
  AccessFee: "Access Fee in SOL",
  Image: "Upload Image of Research Paper",
  ResearchPaperPdf: "Upload Research Paper PDF",
};

export const PublishPageInput = () => {
  const defaultInputs: PublishPageInputs = {
    Name: "",
    Author: "",
    Description: "",
    Domain: "",
    AccessFee: "",
    Image: null,
    ResearchPaperPdf: null,
  };
  const [inputState, setInputState] =
    useState<PublishPageInputs>(defaultInputs);

  const [paperId, setPaperId] = useState<string>("");

  useEffect(() => {
    const generatePaperId = async () => {
      if (inputState.Author !== "" && inputState.Name !== "") {
        const hash = sha256(inputState.Author + inputState.Name);
        setPaperId(hash);
      } else {
        setPaperId("");
      }
      return;
    };
    generatePaperId();
  }, [inputState.Author, inputState.Name]);

  const { palette, breakpoints } = useTheme();
  const mobScreen = useMediaQuery(breakpoints.down("sm"));
  const validateInputs = () => {
    const errors: string[] = [];
    for (const inputName of Inputs) {
      if (
        inputState[inputName as keyof PublishPageInputs] === "" ||
        inputState[inputName as keyof PublishPageInputs] === null
      )
        errors.push(`${inputName} is empty`);
    }
    if (Number(inputState.AccessFee) > MAX_ACCESS_FEE) {
      errors.push(`Access Fee cannot be greater than ${MAX_ACCESS_FEE}`);
    }

    if (inputState.Name.length > MAX_NAME_LENGTH) {
      errors.push(`Name length cannot be greater than ${MAX_NAME_LENGTH}`);
    }
    if (inputState.Description.length > MAX_DESCRIPTION_LENGTH) {
      errors.push(
        `Description length cannot be greater than ${MAX_DESCRIPTION_LENGTH}`
      );
    }

    if (inputState.ResearchPaperPdf?.type !== "application/pdf") {
      errors.push("Research Paper extension should be .pdf");
    }
    if (inputState.Image?.type !== "image/svg+xml") {
      errors.push("Image extension should be .svg");
    }

    if (
      inputState.ResearchPaperPdf?.size &&
      inputState.ResearchPaperPdf.size > MAX_IMAGE_SIZE_IN_BYTES
    ) {
      errors.push(
        `Research Paper size should be less than ${
          MAX_IMAGE_SIZE_IN_BYTES / 1024 / 1024
        } MB`
      );
    }

    if (
      inputState.Image?.size &&
      inputState.Image.size > MAX_IMAGE_SIZE_IN_BYTES
    ) {
      errors.push(
        `Image size should be less than ${
          MAX_IMAGE_SIZE_IN_BYTES / 1024 / 1024
        } MB`
      );
    }

    return errors;
  };

  const handleSubmit = () => {
    const errors = validateInputs();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: "25px",
          "@media (max-width: 600px)": {
            fontSize: "20px",
          },
        }}
        color={"primary"}
        gutterBottom
      >
        Please fill all the inputs and upload necessary files
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          justifyContent: "flex-start",
          p: "5px",
          width: "100%",
          border: `2px solid ${palette.primary.main}`,
          borderRadius: "10px",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            width: mobScreen ? "100%" : "300px",
            minWidth: "200px",
          }}
        >
          <Typography textAlign={"left"}>Paper ID</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            width: "inherit",
          }}
        >
          {paperId !== "" ? (
            <Typography color="primary">{paperId}</Typography>
          ) : (
            <Typography color={palette.text.disabled}>
              Generated Automatically
            </Typography>
          )}
        </Box>
      </Box>

      {Inputs.map((inputName) => (
        <InputComponent
          key={inputName}
          inputName={inputName as keyof PublishPageInputs}
          inputState={inputState}
          setInputState={setInputState}
        />
      ))}
      <Button
        sx={{
          mt: "20px",
        }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

const InputComponent = ({
  inputName,
  inputState,
  setInputState,
}: {
  inputName: string;
  inputState: PublishPageInputs;
  setInputState: (inputState: PublishPageInputs) => void;
}) => {
  const { palette, breakpoints } = useTheme();
  const mobScreen = useMediaQuery(breakpoints.down("sm"));

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (!file) return;
    switch (inputName) {
      case "Image":
        if (file.type !== "image/svg+xml") {
          toast.error("Image should be in .svg format");

          return;
        }
        break;
      case "ResearchPaperPdf":
        if (file.type !== "application/pdf") {
          toast.error("Research Paper should be in .pdf format");

          return;
        }

        break;
    }

    setInputState({
      ...inputState,
      [inputName]: file,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [inputName]: event.target.value,
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        p: "5px",
        width: "100%",
        border: `2px solid ${palette.primary.main}`,
        overflowX: "auto",
        borderRadius: "10px",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          width: mobScreen ? "100%" : "400px",
        }}
      >
        <Typography textAlign={"left"}>{inputName}</Typography>
      </Box>

      {inputName === "Image" || inputName === "ResearchPaperPdf" ? (
        <Tooltip
          title={inputName === "Image" ? ".svg format" : ".pdf format"}
          placement="top-start"
        >
          <Input
            type="file"
            fullWidth
            onChange={handleFileInputChange}
            placeholder={
              InputPlaceholderMap[inputName as keyof typeof InputPlaceholderMap]
            }
            disableUnderline
          ></Input>
        </Tooltip>
      ) : (
        <Input
          type={inputName === "AccessFee" ? "number" : "text"}
          fullWidth
          placeholder={
            InputPlaceholderMap[inputName as keyof typeof InputPlaceholderMap]
          }
          disableUnderline
          value={inputState[inputName as keyof PublishPageInputs]}
          onChange={handleInputChange}
        />
      )}
    </Box>
  );
};
