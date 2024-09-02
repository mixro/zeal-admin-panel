import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';

function App() {
  const admin = true;
  
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
