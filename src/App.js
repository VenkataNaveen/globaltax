import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './reducer/store';

import Auth from './authRoutes/auth';
import Dashbaord from './dashboardRoutes/dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

const ProviderConfig = () =>{
  return (
    <div className='App'>
      <Router basename="/staff" forceRefresh={true}>
        {
          true? <Auth/> :<Dashbaord />
        }
      </Router>
    </div>
  )
}

function App() {
  return (
 <Provider store={store}>
   <ProviderConfig />
 </Provider>
  );
}

export default App;
