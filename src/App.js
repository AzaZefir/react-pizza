import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
        <Routes>
        <Route path='/' element={<Content />}></Route>
      </Routes>

    </div>
  );
}

export default App;
