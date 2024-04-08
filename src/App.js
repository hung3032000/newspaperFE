import logo from "./logo.svg";
//User
import DefaultLayout from 'component/web/layout/HomePage/DefaultLayout';
import pageGuest from 'features/web/index';
// import NotFound from 'features/web/NotFound';
import React, { Suspense } from 'react';
import HomePage from 'features/web/guest/homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const Page = [

    // {
    //   path: ['/', '/home'],
    //   exact: true,
    //   main: HomePage,
    // },
    {
      path: ['/ss'],
      exact: true,
      main: <>Hello</>,
    }
  
  ];
  const showPageGuest = (pages) => {
    if (pages.length > 0) {
      return pages.map((page, index) => <Route key={index} exact={page.exact} path={page.path} component={page.main} />);
    }
  };
  console.log(showPageGuest(Page));
  return (
    <div className="App">
      <DefaultLayout>
        <Routes>
          {/* {showPageGuest(Page)} */}
          <Route path="/home" component={<HomePage/>} />
          {/* <Route path="/*" component={NotFound} exact /> */}
          {/* <Navigate to="/" from="/" /> */}
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
