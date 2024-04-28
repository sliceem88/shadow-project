// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationSuccessPage from './RegistrationSuccessPage';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Other routes */}
          <Route path="/registration/success" component={RegistrationSuccessPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;