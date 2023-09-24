import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import { UserAuth } from '../context/AuthContext';
import Perfil from '../Pages/Perfil';
import Protector from '../components/Protector';

export function MyRoutes() {
    const { user } = UserAuth()
    const RequireAuth = ({ children }) => {
        return user ? children : <Navigate to={'/login'} />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RequireAuth>
                    <Home />
                </RequireAuth>} />
                <Route path='/login' element={<Login />} />
                <Route path='/perfil' element={<Protector>
                    <Perfil/>
                </Protector>} />
            </Routes>
        </BrowserRouter>
    )
}
