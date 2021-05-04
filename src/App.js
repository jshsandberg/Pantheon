import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { API } from "./utils/API";
import { UserContext } from "./context/userContext";
import ArtistPage from "./pages/ArtistPage";
import HomePage from "./pages/HomePages"
import LoginPage from "./pages/LoginPage";
import MediaPage from "./pages/MediaPage";
import SignUpPage from "./pages/SignUpPage";
import AlbumPage from "./pages/AlbumPage";
import WelcomePage from "./pages/WelcomePage";
import FriendsPage from "./pages/FriendsPage";
import PantheonPage from "./pages/PantheonPage";
import MusicPage from "./pages/MusicPage";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const checkIfLoggedIn = async () => {
      let token = await localStorage.getItem("auth-token");
      if (token !== undefined) {
        try {
          const decoded = await jwt.verify(token, "secret");      
          const newUser = await API.getUserbyId(decoded.id);
          await setUser(newUser.data);
        } catch (err) {
          setUser(null)
        }
      } else {
        setUser(null)
      }
    };
    const checkForPantheonTimer = async () => {
      await API.checkPantheonTimer("test");
    };
    const checkForFinalVote = async () => {
      await API.finalVote()
    }
    checkIfLoggedIn();
    checkForPantheonTimer();
    checkForFinalVote();
  }, []);



  return (
    <div>
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/media" component={MediaPage} />
          <Route exact path="/artist" component={ArtistPage} />
          <Route exact path="/album" component={AlbumPage} />
          <Route exact path="/friends" component={FriendsPage} />
          <Route exact path="/pantheon" component={PantheonPage} />
          <Route exact path="/music" component={MusicPage} />
          {/* <button onClick={() => console.log(user)}>Click ME</button> */}
        </UserContext.Provider>
      </Router>
    </div>

  );
}

export default App;
