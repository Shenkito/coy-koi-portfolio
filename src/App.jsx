import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
