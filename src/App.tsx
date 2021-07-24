import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layouts';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
