import { useState } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <PersonalInfo />
            <Education />
        </>
    );
}

export default App;
