
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Creator from './components/Creator';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Content />
      <Routes>
      <Route path="/" element={<Home/>}>/</Route>
      <Route path="/add" element={<Creator />}>/</Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
