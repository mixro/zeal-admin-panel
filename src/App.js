import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import { useSelector } from "react-redux";
import Login from './pages/login/Login';

function App() {
  const user = useSelector((state) => state.zealAdmin.currentUser);
  const admin = user?.isAdmin;
  
  return (
    <div className="app">
      <Router>
        {admin ? 
          <Layout admin={admin} />
          :
          <Routes>
            <Route path='/' element={admin ? <Navigate to='/' /> : <Login />} />
          </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
