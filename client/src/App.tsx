import { AudioProvider } from "./context/AudioProvider";
import FooterPlayer from "./components/FooterPlayer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <AudioProvider>
      {/* tes routes */}
      <HomePage />
      <FooterPlayer />
    </AudioProvider>
  );
}

