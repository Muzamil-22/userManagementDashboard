// src/App.js
import React, { useContext } from "react";
import { UserContext, UserProvider } from "./utils/UserContext";
import UserTable from "./components/UserTable";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

const AppContent = () => {
  const { theme } = useContext(UserContext);
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Management Dashboard</h1>
          <ThemeToggle />
        </header>
        <UserTable />
      </div>
    </div>
  );
};

const App = () => (
  <UserProvider>
    <AppContent />
  </UserProvider>
);

export default App;
