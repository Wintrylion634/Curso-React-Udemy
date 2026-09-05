import { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useAuthentication } from "./hooks/useAuthentication";

//CSS
import "./App.css";

//Components
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

//context
import { AuthProvider } from "./context/AuthContext";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost";

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if(loadingUser){
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
              <Route path="/registro" element={!user ? <Registro /> : <Navigate to="/" />}></Route>
              <Route path="/dashboard" element={user ? <Dashboard />  : <Navigate to="/" />}></Route>
              <Route path="/posts/create" element={user ? <CreatePost />  : <Navigate to="/" />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
