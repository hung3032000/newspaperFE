//User
import DefaultLayout from 'component/web/layout/HomePage/DefaultLayout';
import pageGuest from 'features/web/index';
// import NotFound from 'features/web/NotFound';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const showPageGuest = (pages) => {
    if (pages.length > 0) {
      return pages.map((page, index) => <Route key={index}  path={page.path} element={page.main} />);
    }
  };
  return (
    <div className="App">
      <DefaultLayout>
        <Routes>
          {showPageGuest(pageGuest)}
          {/* <Route path="/home" element={<HomePage/>} /> */}
          {/* <Route path="/*" component={NotFound} exact /> */}
          {/* <Link to="/" from="/" /> */}
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
