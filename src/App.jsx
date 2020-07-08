import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

// custom components
import List from './Pages/HotelList/Container';
import HotelDetails from './Pages/HotelDetails/container';
import PageNotFound from './Components/404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/hotels/:hotelId" component={HotelDetails} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
