// client/src/components/players/HearthisPlayer.tsx
type Props = {
  trackId: string;
};

const HearthisPlayer = ({ trackId }: Props) => {
  return (
    <iframe
      width="100%"
      height="150"
      scrolling="no"
      allow="autoplay"
      style={{
        border: 'none',
        borderRadius: '10px',
      }}
      src={`https://app.hearthis.at/embed/${trackId}/transparent_black/?style=2&background=1&waveform=0&cover=0&autoplay=0`}
    />
  );
};

export default HearthisPlayer;