import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { Home } from '../components/home/Home'
import { Signup } from '../components/Signup/Signup'
import { auth } from '../firebase'
import { useEffect, useState } from 'react'

export function MyRoutes() {
    const [userName, setUsername] = useState([])
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsername(user.displayName)
            } else {
                setUsername("")
            }
        }, [])
    })
    return (
        <Router>
            <Routes>
                <Route exact path="/"
                    element={<Home name={userName} />}
                />
                <Route exact path="/login"
                    element={<Login />}
                />
                <Route exact path="/signup"
                    element={<Signup />}
                />
            </Routes>
        </Router>
    )
}
