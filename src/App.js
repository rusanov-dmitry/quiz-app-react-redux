import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreenContainer from './components/MainScreen/MainScreenContainer';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Route path='/welcome' render={ () => <WelcomeScreen /> } />
            <Route path='/main' render={ () => <MainScreenContainer /> } />
        </div>
    );
}

export default App;
