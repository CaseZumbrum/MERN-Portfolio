
import './App.css';
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
