import List from './components/List';
import Item from './components/Item';
import ErrorTest from './pages/ErrorTest';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ViewProvider } from './ViewContext';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <ViewProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/err" element={<ErrorTest />} />
          <Route path="/list/:id" element={<Item />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ViewProvider>
    </div>
  );
}

export default App;
