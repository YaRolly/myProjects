import { Container, Typography } from "@mui/material";
import { AlignmentForm } from "./components/AlignmentForm";
import { useState } from "react";
import { AlignmentResult } from "./components/AlignmentResult";

export type AlignmentFormData = {
  sequence1: string;
  sequence2: string;
};

function App() {
  const [sequences, setSequences] = useState<AlignmentFormData>();

  const handleSubmitSequences = (data: AlignmentFormData) => {
    setSequences(data);
  };

  return (
    <Container fixed>
      <Typography
        variant="h5"
        align="center"
        sx={{ width: 550, margin: "auto" }}
      >
        Выравнивание аминокислотных последовательностей
      </Typography>
      <AlignmentForm onSubmitSequences={handleSubmitSequences} />
      <AlignmentResult sequences={sequences} />
    </Container>
  );
}

export default App;
