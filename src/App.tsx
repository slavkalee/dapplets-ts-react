import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layouts';
import MainPage from './pages/MainPage';
import { fetchTags } from './store/actions/tags';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

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
