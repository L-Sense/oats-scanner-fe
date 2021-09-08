import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NotFound from "./routes/NotFound";
import routes from './routes'
import { DefaultLayout } from "./layouts";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact
            component={() => (
              <route.layout>
                <route.component />
              </route.layout>
            )}
          />
        ))}
        <Route component={() => (
          <DefaultLayout>
            <NotFound/>
          </DefaultLayout>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
