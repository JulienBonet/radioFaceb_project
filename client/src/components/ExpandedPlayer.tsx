import { Box, Typography, IconButton, Slider } from "@mui/material";
import { Close, PlayArrow, Pause } from "@mui/icons-material";
import { useAudio } from "../hooks/useAudio";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ExpandedPlayer({ open, onClose }: Props) {
  const { track, isPlaying, play, stop, progress } = useAudio();

  if (!open || !track) return null;

  const progressPercent = Math.min(progress * 100, 100);

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(30px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 🎨 background cover */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${track.img_large_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(50px)",
          opacity: 0.2,
        }}
      />

      {/* ❌ bouton fermer */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: "white",
        }}
      >
        <Close />
      </IconButton>

      {/* 🎧 contenu */}
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          width: "90%",
          maxWidth: 400,
        }}
      >
        {/* cover */}
        <Box
          component="img"
          src={track.img_medium_url || '/images/cover_default.jpg'}
          alt={track.title}
          sx={{
            width: "100%",
            borderRadius: 3,
            mb: 3,
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        />

        {/* titre */}
        <Typography
          variant="h5"
          sx={{ color: "white", fontWeight: 700 }}
        >
          {track.title}
        </Typography>

        {/* artiste */}
        <Typography
          variant="body1"
          sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}
        >
          {track.author}
        </Typography>

        {/* progress */}
        <Slider
          value={progressPercent}
          sx={{
            color: "#ff6b00",
            "& .MuiSlider-thumb": { display: "none" },
          }}
        />

        {/* controls */}
        <IconButton
          onClick={isPlaying ? stop : play}
          sx={{
            mt: 3,
            width: 70,
            height: 70,
            background: "#ff6b00",
            color: "white",
            "&:hover": { background: "#ff7b1a" },
          }}
        >
          {isPlaying ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
        </IconButton>
      </Box>
    </Box>
  );
}