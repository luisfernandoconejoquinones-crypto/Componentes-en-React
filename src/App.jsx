import Sidebar from './sidebar';
import Dashboard from './dashboard';
import PanelDerecho from './PanelDerech';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <Dashboard />
      <PanelDerecho />
    </div>
  );
}

export default App;