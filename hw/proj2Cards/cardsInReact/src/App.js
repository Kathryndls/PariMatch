import { useState, useEffect } from "react";
import {Routes} from './routes';
import AuthService from "./services/AuthService";
import Login from "./components/Login";
import Register from "./components/Register";
import Test from "./components/Test";
import { Header } from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Modal } from "./components/Modal";
import getStatuses from "./services/get-statuses";
// // import {Header} from "./components/Header/Header";
// import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    getStatuses.get()
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  
  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes currentUser={currentUser} />

      <Modal isVisible={isVisible} onHide={setIsVisible} />
    </>
  );
}

export default App;
