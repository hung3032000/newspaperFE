import logo from "./logo.svg";
//User
import DefaultLayout from 'component/web/layout/HomePage/DefaultLayout';
import pageGuest from 'features/web/guest/index';
// import NotFound from 'features/web/NotFound';
import React, { Suspense } from 'react';

import Home from 'features/web/guest/homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  // function
  const showPageGuest = (page) => {
    if (page.length > 0) {
      return page.map((page, index) => <Route key={index} exact={page.exact} path={page.path} component={page.main} />);
    }
  };

  return (
    <div className="App">
      <DefaultLayout>
        <Routes>
          {/* {showPageGuest(pageGuest)} */}
          <Route path="/home" component={<Home/>} />
          {/* <Route path="/*" component={NotFound} exact /> */}
          {/* <Navigate to="/" from="/" /> */}
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
