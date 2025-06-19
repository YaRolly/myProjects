import { Box, useMediaQuery } from "@mui/material";
import type { AlignmentFormData } from "../App";
import { AMINO_ACID_COLORS } from "../utils/colorMap";
import { splitChunks } from "../utils/splitIntoChunks";
import { useState } from "react";

type Props = {
  sequences?: AlignmentFormData;
};

export function AlignmentResult({ sequences }: Props) {
  const isSmall = useMediaQuery("(max-width:480px)");
  const isMedium = useMediaQuery("(max-width: 768px)");
  const [showCopied, setShowCopied] = useState<boolean>(false);

  if (!sequences) return null;

  const { sequence1, sequence2 } = sequences;

  const chunkSize = isSmall ? 5 : isMedium ? 9 : 13;

  const firstChunks = splitChunks(sequence1, chunkSize);
  const secondChunks = splitChunks(sequence2, chunkSize);

  const handleCopy = (chunk: string) => {
    navigator.clipboard.writeText(chunk).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 1000);
    });
  };

  return (
    <Box
      sx={{
        paddingTop: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        flexWrap: "wrap",
        margin: "auto",
        alignItems: "center",
      }}
    >
      {firstChunks.map((chunk, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Box
            onClick={() => handleCopy(chunk)}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2px",
              marginBottom: "1px",
            }}
          >
            {chunk.split("").map((symbol: string, i: number) => (
              <Box
                key={i}
                sx={{
                  backgroundColor: AMINO_ACID_COLORS[symbol],
                  color: symbol === "-" ? "#666" : "#fff",
                  padding: "6px 8px",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  borderRadius: 1,
                  minWidth: "24px",
                  textAlign: "center",
                  cursor: "pointer",
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                  userSelect: "text",
                }}
              >
                {symbol}
              </Box>
            ))}
          </Box>
          <Box
            onClick={() => handleCopy(chunk)}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2px",
            }}
          >
            {secondChunks[index].split("").map((symbol: string, i: number) => {
              const different = symbol !== firstChunks[index][i];
              return (
                <Box
                  key={i}
                  sx={{
                    backgroundColor: different
                      ? AMINO_ACID_COLORS[symbol]
                      : "transparent",
                    color:
                      symbol === "-" ? "#666" : different ? "#fff" : "#000",
                    padding: "6px 8px",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    borderRadius: 1,
                    minWidth: "24px",
                    textAlign: "center",
                    cursor: "pointer",
                    whiteSpace: "pre-wrap",
                    fontFamily: "monospace",
                    userSelect: "text",
                  }}
                >
                  {symbol}
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
      {showCopied && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            background: "lightgreen",
            padding: "4px 8px",
            borderRadius: "8px",
            fontSize: "0.9rem",
          }}
        >
          Скопировано!
        </Box>
      )}
    </Box>
  );
}
