import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <Box>
      <TextField
        value={value}
        onChange={(event) => setValue(event.target.value)}
        id="todo-input"
        label="What needs to be done"
        variant="standard"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ paddingRight: 2 }}>
              <IconButton aria-label="add" onClick={handleClick}>
                <AddIcon sx={{ color: "grey.300" }} />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            paddingBottom: 1,
            "&:before": {
              borderBottomColor: "grey.300",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: "grey.400",
            },
            "&:after": {
              borderBottomColor: "grey.500",
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: "grey.400",
            fontSize: "1.2rem",
            paddingLeft: 2,
          },
        }}
      />
    </Box>
  );
}
