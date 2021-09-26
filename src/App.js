import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import AuthRoute from "./components/AuthRoute";
import NestingRoute from "./components/NestingRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route path="/" exact >
                <Login />
              </Route>
              <AuthRoute path="/home" exact >
                <Home />
              </AuthRoute>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
        <NestingRoute />
      </div>
    </Router>
  );
}

export default App;
