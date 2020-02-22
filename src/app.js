import React from 'react';
import  './styles/style.scss';
import Layout from './components/layout/layout';
import {BrowserRouter as Router} from 'react-router-dom';

function App(){
    return (
        <Router>
            <Layout/>
        </Router>
    );
}

export default App; 
