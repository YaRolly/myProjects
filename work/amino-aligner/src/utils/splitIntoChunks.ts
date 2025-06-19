export function splitChunks(sequence: string, size: number): string[] {
  const chunks = [];
  for (let index = 0; index < sequence.length; index += size) {
    chunks.push(sequence.slice(index, index + size));
  }
  return chunks;
}
