// client/src/components/mixtapes/MixtapeGrid.tsx
import { Box } from "@mui/material";
import type { Mixtape } from "../../api/mixtape.api";
import MixtapeCard from "./MixtapeCard";

type Props = {
  mixtapes: Mixtape[];
  onSelect?: (id: number) => void;
};

const MixtapeGrid = ({ mixtapes, onSelect }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'center', 
        gap: 2,
      }}
    >
      {mixtapes.map((m) => (
        <MixtapeCard key={m.id} mixtape={m} onClick={onSelect} />
      ))}
    </Box>
  );
};

export default MixtapeGrid;