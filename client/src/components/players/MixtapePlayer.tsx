import MixcloudPlayer from './MixcloudPlayer';
import HearthisPlayer from './HearthisPlayer';

type Props = {
  platform: string;
  embedRef: string;
};

const MixtapePlayer = ({ platform, embedRef }: Props) => {
  switch (platform) {
    case 'mixcloud':
      return <MixcloudPlayer feed={embedRef} />;

    case 'hearthis':
      return <HearthisPlayer trackId={embedRef} />;

    default:
      return null;
  }
};

export default MixtapePlayer;