import React from 'react';
import { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';

import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
