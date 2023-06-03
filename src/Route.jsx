import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Thanks from "./Thanks";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const newsletterContext = createContext();
function PageRoute() {
  const [email, setEmail] = useState("");
  const value = {
    email,
    setEmail,
  };
  return (
    <newsletterContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/Thanks-for-subscribing" element={<Thanks />} />
        </Routes>
      </Router>
    </newsletterContext.Provider>
  );
}

export default PageRoute;
