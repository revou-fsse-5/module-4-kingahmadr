// import MultiStepForm from "./modules/MultiStepForm";

import DataDisplay from "./components/DataDisplay";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/NavbarComponent";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./modules/ProtectedRoute";
import { AuthProvider } from "./context/UseAuthContext";
import TableDataDisplay from "./components/TableDataDisplay";

const NotFound: React.FC = () => <h2>404 Not Found</h2>;
function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
