// client/src/App.tsx
import { BrowserRouter } from "react-router-dom";

import { AudioProvider } from "./context/AudioProvider";
import Header from "./components/Header";
import FooterPlayer from "./components/FooterPlayer";
import Router from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <AudioProvider>
        <Header />

        <Router />

        <FooterPlayer />
      </AudioProvider>
    </BrowserRouter>
  );
}
