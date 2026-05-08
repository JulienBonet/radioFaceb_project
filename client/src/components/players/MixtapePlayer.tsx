import MixcloudPlayer from './MixcloudPlayer';
import HearthisPlayer from './HearthisPlayer';

type Props = {
  platform: string;
  embedUrl: string;
};

const MixtapePlayer = ({ platform, embedUrl }: Props) => {
  switch (platform) {
    case 'mixcloud':
      return <MixcloudPlayer feed={embedUrl} />;

    case 'hearthis':
      return <HearthisPlayer trackId={embedUrl} />;

    default:
      return null;
  }
};

export default MixtapePlayer;