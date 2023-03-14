import React, { useState } from "react";

import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search(props) {
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState("");

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <div>
      <Stack direction="row">
        <TextField
          id="standard-search"
          label="search product"
          type="search"
          variant="standard"
          value={valueInput}
          onChange={handleOnChange}
        />

        <IconButton
          aria-label=""
          onClick={handleSubmit}
          sx={{ left: "-10px", width: "45px" }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </div>
  );
}

export default Search;
