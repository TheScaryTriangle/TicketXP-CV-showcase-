import './App.css';

import MainRouter from "./navigation"
import { BrowserRouter as Router } from "react-router-dom";
import { ContractProvider } from './context/contractContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ContractProvider>
            <MainRouter />
          </ContractProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
