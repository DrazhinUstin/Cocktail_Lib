import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cocktail from './pages/Cocktail';
import Ingredient from './pages/Ingredient';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='cocktail/:id' element={<Cocktail />} />
                <Route path='ingredient/:name' element={<Ingredient />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
