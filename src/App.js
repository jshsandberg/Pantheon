import { BrowserRouter as Router, Route } from "react-router-dom";
import ArtistPage from "./pages/ArtistPage";
import HomePage from "./pages/HomePages"
import LoginPage from "./pages/LoginPage";
import MediaPage from "./pages/MediaPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/media" component={MediaPage} />
        <Route exact path="/artist" component={ArtistPage} />
      </Router>
    </div>

  );
}

export default App;
