import React from 'react';
import './App.css';
import { history } from './utils/history';
import createRoutes from './Routes';

history.listen(function (location) {
  const path = (/#(\/.*)$/.exec(location.hash) || [])[1];
  if (path) history.replace(path);
});

const routes = createRoutes();

const App: React.FC = () => {
  return (
    routes
  );
}

export default App;
