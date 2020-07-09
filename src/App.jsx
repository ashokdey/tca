import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

// context
import { hotelsContext } from './contexts/hotels';

// custom components
import List from './Pages/HotelList/Container';
import HotelDetails from './Pages/HotelDetails/container';
import PageNotFound from './Components/404';

function App() {
  // store the hotels after processing
  const [hotels, setHotels] = useState([]);
  return (
    <BrowserRouter>
      <hotelsContext.Provider value={[hotels, setHotels]}>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/hotels/:hotelId" component={HotelDetails} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </hotelsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
