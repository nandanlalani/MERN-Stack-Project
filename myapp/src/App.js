import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link, useNavigate } from 'react-router-dom';
import Appointments from './Appointments';
import Doctors from './Doctors';
import Patients from './Patients';
import './App.css'

const App = () => {
    const isLinkActive =
        (path) =>
            window.location.pathname === path;
    return (
        <Router>
            <div className="container">
                <h1 style={{ color: "green" }}>
                    Synergy Multispeciality Hospital
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/appointments">Appointments</Link>
                        </li>
                        <li>
                            <Link to="/doctors">Doctors</Link>
                        </li>
                        <li>
                            <Link to="/patients">Patients</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/" element={<Appointments />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/patients" element={<Patients />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
