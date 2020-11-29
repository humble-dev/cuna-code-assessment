import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoanFormPage from './pages/LoanForm.Page';
import { LoanContextProvider } from './contexts/LoanContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/bootstrap.min.css';

const Result = props => {
  const body = props.location.body;
  console.log(props);
  if (body.qualified)
    return (
      <div>
        <h1>qualified</h1>
        <>{body.msg}</>
      </div>
    );

  return (
    <div>
      <h1>disqualified</h1>
      <>{props.msq}</>
    </div>
  );
};

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
