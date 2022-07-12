import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';


function App() {
    const {user} = useAuth0();

    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />
        {user && <Route path='/profile' element={<AuthPage />} />}
        

    </Routes>
    </BrowserRouter>







  )
}

export default App;
