import { useEffect, useState } from 'react';
import Navbar from './NavBar';
import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';
import SoftwareProjects from './pages/software-projects/SoftwareProjects';
import Wikler from './pages/wikler/Wikler';
import FIRE from './pages/fire/FIRE';
import IBLab from './pages/ib-lab/IB_Lab';
import Error from './pages/error/Error';
import TrainWeatherPage from './pages/TrainWeatherData/TrainWeatherPage';
import type { ThemeMode } from './theme';

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const storedTheme = window.localStorage.getItem('theme-mode');
    return storedTheme === 'dark' ? storedTheme : 'light';
  });

  useEffect(() => {
    document.body.dataset.theme = themeMode;
    window.localStorage.setItem('theme-mode', themeMode);
  }, [themeMode]);

  return (
    <>
      <Navbar themeMode={themeMode} onThemeModeChange={setThemeMode} />
      <div className="container site-content">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/software-projects" element={<SoftwareProjects />} />
          <Route path="/wikler" element={<Wikler />} />
          <Route path="/fire" element={<FIRE />} />
          <Route path="/ib-lab" element={<IBLab />} />
          <Route path="/train-weather" element={<TrainWeatherPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
    </>
  )
  
}

export default App;
