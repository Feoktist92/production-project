import React, { Suspense, useContext } from 'react';
import { Counter } from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage.async';
import { AboutPageAsync } from './pages/AboutPages.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <br />
            <Link to='/'>Home</Link>
            <br />
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
