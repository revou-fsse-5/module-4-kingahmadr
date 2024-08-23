import LoginForm from "./components/LoginForm";
import Navbar from "./components/NavbarComponent";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./modules/ProtectedRoute";
import { DataProvider } from "./context/UseDataContext";
import TableDataDisplay from "./components/TableDataDisplay";

const NotFound: React.FC = () => <h2>404 Not Found</h2>;

function App() {
  return (
    <>
      <DataProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/categories" element={<TableDataDisplay />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
