import React from "react";
import { useDataContext } from "../context/UseDataContext";
import { useFetchData } from "../modules/UseFetchData";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { isAuthenticated } = useDataContext();
  const { userLogout } = useFetchData();
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-md">
        <div className="text-white text-lg font-bold">My App</div>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-400">
            <button
              onClick={() => navigate("/multistepform")}
              className="text-white hover:text-gray-400"
            >
              Multi Step Form
            </button>
          </li>
          <li className="text-white hover:text-gray-400">
            <button
              onClick={() => navigate("/")}
              className="text-white hover:text-gray-400"
            >
              Home
            </button>
          </li>
          {!isAuthenticated ? (
            <>
              <li>
                <button
                  onClick={() => navigate("/login")}
                  className="text-white hover:text-gray-400"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/register")}
                  className="text-white hover:text-gray-400"
                >
                  Register
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => navigate("/categories")}
                  className="text-white hover:text-gray-400"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  onClick={userLogout}
                  className="text-white hover:text-gray-400"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
