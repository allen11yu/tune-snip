import { useRef, useState } from "react";
import "./App.css";
import IdentifyPage from "./pages/IdentifyPage/IdentifyPage";
import SongListPage from "./pages/SongListPage/SongListPage";

function App() {
  const [isDetecting, setIsDetecting] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const songListRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app-container">
      <IdentifyPage songListRef={songListRef} isDetecting={isDetecting} setIsDetecting={setIsDetecting} />
      <SongListPage songListRef={songListRef} isLogin={isLogin} />
    </div>
  );
}

export default App;
