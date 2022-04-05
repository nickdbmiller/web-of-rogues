import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import { LandingScreen, GameScreen } from './screens/screenIndex';

import './App.css';

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingScreen />} />
                    <Route path="/game" element={<GameScreen />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
