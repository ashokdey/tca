import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

// custom components
import List from './List/Container'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={List} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
