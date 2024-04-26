import { Search } from "@mui/icons-material";
import { Box, Input, useTheme } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
        p: "6px",
        border: `2px solid ${palette.secondary.main}`,
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
      />
    </Box>
  );
};
