import { Button, ButtonGroup, Typography } from "@mui/material";
import { FILTER } from "../constants";

export function TodoFooter({
  count,
  clearComplited,
  changeFilter,
  filter,
}: {
  count: number;
  clearComplited: () => void;
  changeFilter: (filter: string) => void;
  filter: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Typography sx={{ color: "grey.500", fontSize: 13 }}>
        {count} items left
      </Typography>
      <ButtonGroup size="small" disableElevation>
        <Button
          variant={filter === FILTER.ALL ? "outlined" : "text"}
          onClick={() => changeFilter(FILTER.ALL)}
          sx={{
            color: "grey.500",
            borderColor: "grey.400",
            textTransform: "none",
          }}
        >
          {FILTER.ALL}
        </Button>
        <Button
          variant={filter === FILTER.ACTIVE ? "outlined" : "text"}
          onClick={() => changeFilter(FILTER.ACTIVE)}
          sx={{
            color: "grey.500",
            borderColor: "grey.400",
            textTransform: "none",
          }}
        >
          {FILTER.ACTIVE}
        </Button>
        <Button
          variant={filter === FILTER.COMPLITED ? "outlined" : "text"}
          onClick={() => changeFilter(FILTER.COMPLITED)}
          sx={{
            color: "grey.500",
            borderColor: "grey.400",
            textTransform: "none",
          }}
        >
          {FILTER.COMPLITED}
        </Button>
      </ButtonGroup>
      <Button
        sx={{ color: "grey.500", fontSize: 13, textTransform: "none" }}
        onClick={clearComplited}
      >
        Clear completed
      </Button>
    </div>
  );
}
