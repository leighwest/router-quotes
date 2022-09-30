import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from 'pages/AllQuotes';
import QuoteDetail from 'pages/QuoteDetail';
import NewQuote from 'pages/NewQuote';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact>
        <Redirect to="/quotes" />
      </Route>
      <Route
        path="/quotes"
        // if you don't put exact here it will never render 'quotes/:quoteId because it will match the first part of the URL and
        // return "/quotes"
        exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
