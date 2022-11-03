import List from './components/List';
import Item from './components/Item';
import Home from './pages/Home';
import { ViewProvider } from './ViewContext';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <ViewProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/:id" element={<Item />} />
        </Routes>
      </ViewProvider>
    </div>
  );
}

export default App;
