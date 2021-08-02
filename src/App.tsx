import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layouts';
import EditorChoice from './pages/EditorChoice';
import EssentialsDapplets from './pages/EssentialsDapplets';
import FinancialDapplets from './pages/FinancialDapplets';
import MainPage from './pages/MainPage';
import SocialNetworks from './pages/SocialNetworks';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/editor">
              <EditorChoice />
            </Route>
            <Route path="/essential">
              <EssentialsDapplets />
            </Route>
            <Route path="/social">
              <SocialNetworks />
            </Route>
            <Route path="/finance">
              <FinancialDapplets />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
