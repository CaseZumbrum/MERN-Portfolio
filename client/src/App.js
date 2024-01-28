
import './App.css';
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import Intro from './Pages/Intro';
import {Route,Routes} from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
        <div className="container">
          <Header></Header>
          <Intro/>
          <HomePage/>
        </div>
        } />
      </Route>
    </Routes>
   
  );
}

export default App;
