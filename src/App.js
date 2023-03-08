import { Route,Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import useAuth from "./hooks/useAuth";
import Permisiondenied from "./component/Permisiondenied";

function App() {
  const {isLoggedIn} = useAuth();
  return (
    <div className="">
      <Nav />
      <Routes >
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={isLoggedIn ? <Hero/> : <Permisiondenied/>} />
      </Routes>
    </div>
  );
}

export default App;
