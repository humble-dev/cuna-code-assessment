import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoanFormPage from './pages/LoanForm.Page';
import { LoanContextProvider } from './contexts/LoanContext';
import Result from './components/Result';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <LoanContextProvider>
        <Switch>
          <Route exact path='/' component={LoanFormPage} />
          <Route
            exact
            path='/result'
            component={props => <Result {...props} />}
          />
        </Switch>
      </LoanContextProvider>
    </Router>
  );
};
export default App;
