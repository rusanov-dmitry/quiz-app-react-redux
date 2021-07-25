import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreenContainer from './components/MainScreen/MainScreenContainer';
import QuizScreenContainer from './components/QuizScreen/QuizScreenContainer';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Route path='/welcome' render={ () => <WelcomeScreen /> } />
            <Route path='/main' render={ () => <MainScreenContainer /> } />
            <Route path='/quiz' render={ () => <QuizScreenContainer /> } />
        </div>
    );
}

export default App;
