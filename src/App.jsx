import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

// context
import { hotelsContext } from './contexts/hotels';

// custom components
import HotelList from './Pages/HotelList/Containers/HotelList';
import HotelDetails from './Pages/HotelDetails/Containers/HotelDetailsPageContainer';
import PageNotFound from './Components/Generic/404';

function App() {
  // store the hotels after processing
  const [hotels, setHotels] = useState([]);
  return (
    <BrowserRouter>
      <hotelsContext.Provider value={[hotels, setHotels]}>
        <Switch>
          <Route exact path="/" component={HotelList} />
          <Route exact path="/hotels/:hotelId" component={HotelDetails} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </hotelsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
