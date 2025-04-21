import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateCrewmate from './CreateCrewmate';
import EditCrewmate from './EditCrewmate';
import SummaryPage from './SummaryPage';
import CrewmateDetail from './CrewmateDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />    
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />  
      </Routes>
    </Router>
  );
}

export default App;