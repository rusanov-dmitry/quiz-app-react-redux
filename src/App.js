import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import MainScreenContainer from './components/MainScreen/MainScreenContainer';
import QuizScreenContainer from './components/QuizScreen/QuizScreenContainer';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Route exact path='/' render={ () => <WelcomeScreen /> } />
            <Route exact path='/main' render={ () => <MainScreenContainer /> } />
            <Route exact path='/quiz' render={ () => <QuizScreenContainer /> } />
        </div>
    );
}

export default App;
