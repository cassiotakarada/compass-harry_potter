import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
// import Hall from './Hall';
// import Wizard from './Wizard';
// import Houses from './Houses';
// import Elixir from './Elixir';
// import Spells from './Spells';
// import Quadriball from './Quadriball';

const Routes: React.FC = () => {
  return (
    <>
      <Route exact={true} path="/" component={Home} />
      {/* <Route path="/hall" component={Hall} />
      <Route path="/wizard" component={Wizard} />
      <Route path="/houses" component={Houses} />
      <Route path="/elixir" component={Elixir} />
      <Route path="/spells" component={Spells} />
      <Route path="/quadriball" component={Quadriball} /> */}
    </>
  );
};

export default Routes;