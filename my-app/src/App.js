
import './App.css';
import Form from './views/Form ';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Form/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
