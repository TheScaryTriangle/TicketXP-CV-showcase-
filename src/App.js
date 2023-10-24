import MainRouter from "./navigation"
import { BrowserRouter as Router } from "react-router-dom";
import { ContractProvider } from './context/contractContext';

function App() {
  return (
    <div className="App">
        <Router>
          <ContractProvider>
            <MainRouter />
          </ContractProvider>
        </Router>
    </div>
  );
}

export default App;
