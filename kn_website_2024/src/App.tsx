import Navbar from './NavBar';
import "./styles.css"
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Resume from './pages/Resume';
import SoftwareProjects from './pages/SoftwareProjects';
import Wikler from './pages/Wikler';
import FIRE from './pages/FIRE';
import IB_Lab from './pages/IB_Lab';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/SoftwareProjects" element={<SoftwareProjects />} />
          <Route path="/Wikler" element={<Wikler />} />
          <Route path="/FIRE" element={<FIRE />} />
          <Route path="/IB_Lab" element={<IB_Lab />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
    </>
  )
  
}

export default App;
