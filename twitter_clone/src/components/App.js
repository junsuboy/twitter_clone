import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> &copy; twitter_clone {new Date().getFullyear} </footer>
    </>
  );
}

export default App;
