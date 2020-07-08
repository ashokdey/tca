import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

// custom components
import List from './HotelList/Container'
import HotelDetails from './HotelDetails/container'
import PageNotFound from './Components/404';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/hotels/:hotelId" component={HotelDetails} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
