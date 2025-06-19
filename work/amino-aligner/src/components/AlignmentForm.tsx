import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import type { AlignmentFormData } from "../App";

type Props = {
  onSubmitSequences: (data: AlignmentFormData) => void;
};

export function AlignmentForm({ onSubmitSequences }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AlignmentFormData>();

  const firstSequence = watch("sequence1");

  const onSubmit = (data: AlignmentFormData) => {
    const normalizedData = {
      sequence1: data.sequence1.toUpperCase(),
      sequence2: data.sequence2.toUpperCase(),
    };
    onSubmitSequences(normalizedData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 550,
        margin: "auto",
        paddingTop: 1,
      }}
    >
      <TextField
        {...register("sequence1", {
          required: "Поле обязательно",
          pattern: {
            value: /^[ARNDCEQGHILKMFPSTWYV-]+$/i,
            message: "Только латинские символы A-Z и '-'",
          },
        })}
        error={!!errors.sequence1}
        label="Последовательность 1"
        variant="outlined"
        helperText={errors.sequence1?.message}
      />
      <TextField
        {...register("sequence2", {
          required: "Поле обязательно",
          pattern: {
            value: /^[ARNDCEQGHILKMFPSTWYV-]+$/i,
            message: "Только латинские символы A-Z и '-'",
          },
          validate: (value) =>
            !firstSequence || value.length === firstSequence.length
              ? true
              : "Последовательности должны быть одинаковой длины",
        })}
        error={!!errors.sequence2}
        label="Последовательность 2"
        variant="outlined"
        helperText={errors.sequence2?.message}
      />
      <Button variant="contained" type="submit">
        Выравнивание
      </Button>
    </Box>
  );
}
