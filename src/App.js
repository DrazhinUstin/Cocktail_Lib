import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Cocktail from './pages/Cocktail';
import Ingredient from './pages/Ingredient';
import PageNotFound from './pages/PageNotFound';
import ScrollTopBtn from './components/ScrollTopBtn';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='faq' element={<FAQ />} />
                <Route path='cocktail/:id' element={<Cocktail />} />
                <Route path='ingredient/:name' element={<Ingredient />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <ScrollTopBtn />
        </Router>
    );
};

export default App;
