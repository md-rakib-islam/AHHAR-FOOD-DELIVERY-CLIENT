import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import AuthProvider from "./contexts/AuthProvider.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Dashboard from "./pages/Dashboard.js";
import Details from "./pages/Details.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import PageNotFound from "./pages/PageNotFound.js";
import Reset from "./pages/Reset.js";
import Signup from "./pages/Signup.js";
import PrivateRoute from "./route/PrivateRoute.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header> </Header>
              <Home></Home>
              <Footer></Footer>
            </Route>

            <Route path="/home">
              <Header> </Header>
              <Home></Home>
              <Footer></Footer>
            </Route>

            <Route path="/about">
              <Header> </Header>
              <About></About>
              <Footer></Footer>
            </Route>

            <Route path="/contact">
              <Header> </Header>
              <Contact></Contact>
              <Footer></Footer>
            </Route>

            <Route exact path="/services">
              <Header> </Header>
              <services></services>
              <Footer></Footer>
            </Route>

            <PrivateRoute path="/dashboard">
              <Header> </Header>
              <Dashboard></Dashboard>
              <Footer></Footer>
            </PrivateRoute>

            <Route path="/login">
              <Header> </Header>
              <Login></Login>
              <Footer></Footer>
            </Route>

            <Route path="/signup">
              <Header> </Header>
              <Signup></Signup>
              <Footer></Footer>
            </Route>

            <Route path="/reset">
              <Header> </Header>
              <Reset></Reset>
              <Footer></Footer>
            </Route>

            <Route path="/services/:id">
              <Header> </Header>
              <Details></Details>
              <Footer></Footer>
            </Route>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
