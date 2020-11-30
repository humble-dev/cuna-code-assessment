import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoanFormPage from './pages/LoanForm.Page';
import Result from './components/Result';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoanFormPage} />
        <Route
          exact
          path='/result'
          component={props => <Result {...props} />}
        />
      </Switch>
    </Router>
  );
};
export default App;
