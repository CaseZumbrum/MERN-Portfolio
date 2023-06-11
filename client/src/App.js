
import './App.css';
import Post from "./Post";
import Header from "./Header";
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
   
  );
}

export default App;
