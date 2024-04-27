import { Search } from "@mui/icons-material";
import { Box, Button, IconButton, Input, useTheme } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";

type SearchBarProps = {
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
};
export const SearchBar = ({
  searchString,
  setSearchString,
}: SearchBarProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const { palette } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        borderRadius: "10px",
        width: "fit-content",
        p: "4px",
        border: `2px solid ${palette.primary.main}`,
        alignItems: "center",
      }}
    >
      <Search color="primary" />
      <Input
        fullWidth
        value={searchString}
        onChange={handleSearch}
        disableUnderline
        placeholder="Search"
        size="small"
      />
      <IconButton onClick={() => setSearchString("")}>
        <CloseIcon color="primary" />
      </IconButton>
    </Box>
  );
};
