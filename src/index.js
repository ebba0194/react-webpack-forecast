import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HelloWorld from './Pages/1_1_HelloWorld';
import FunctionalComponents from './Pages/1_2_FunctionalComponents';
import './styles.css';

function Home() {
  return <h2>Home</h2>;
}

const Index = () => (
  <Router>
    <header className="sticky top-0 bg-ecru h-20 shadow-lg max-w-full">
      <ul className="w-100 h-full flex justify-center">
        <li className="h-full flex justify-center p-4">
          <Link className="h-full text-raisinBlack font-bold hover:text-dodgerBlue flex justify-center items-center" to="/">Home</Link>
        </li>
        <li className="h-full flex justify-center p-4">
          <Link className="h-full text-raisinBlack font-bold hover:text-dodgerBlue flex justify-center items-center" to="/hello-world">1.1 - Hello World</Link>
        </li>
        <li className="h-full flex justify-center p-4">
          <Link className="h-full text-raisinBlack font-bold hover:text-dodgerBlue flex justify-center items-center" to="/functional-components">1.2 - Functional Components</Link>
        </li>
      </ul>
    </header>
    <div className="bg-isabelline min-h-screen">
      <Switch>
        <Route path="/functional-components">
          <FunctionalComponents />
        </Route>
        <Route path="/hello-world">
          <HelloWorld />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('index'));
