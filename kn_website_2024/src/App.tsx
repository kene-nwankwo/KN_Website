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

function App() {
  return (
    <>
      <Navbar />
      <div className="container site-content">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/SoftwareProjects" element={<SoftwareProjects />} />
          <Route path="/Wikler" element={<Wikler />} />
          <Route path="/FIRE" element={<FIRE />} />
          <Route path="/IB_Lab" element={<IBLab />} />
          <Route path="/trainweatherpage" element={<TrainWeatherPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
    </>
  )
  
}

export default App;
