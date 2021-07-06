import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreen from './components/MainScreen/MainScreen';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Route path='/welcome' render={ () => <WelcomeScreen /> } />
            <Route path='/main' render={ () => <MainScreen /> } />
        </div>
    );
}

export default App;
