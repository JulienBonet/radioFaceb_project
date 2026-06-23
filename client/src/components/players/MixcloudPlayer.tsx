// client/src/components/players/MixcloudPlayer.tsx
const getMixcloudEmbed = (feed: string) => {
  const clean = feed.replace(/^\/|\/$/g, '');
  const formatted = `/${clean}/`;
  const encoded = encodeURIComponent(formatted);

  return `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=${encoded}`;
};

type Props = {
  feed: string;
};

const MixcloudPlayer = ({ feed }: Props) => {
  return (
    <iframe
      width="100%"
      height="120"
      style={{ border: 'none' }}
      allow="encrypted-media; fullscreen; autoplay; web-share;"
      src={getMixcloudEmbed(feed)}
    />
  );
};

export default MixcloudPlayer;