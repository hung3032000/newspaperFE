//User
import DefaultLayout from 'component/web/layout/HomePage/DefaultLayout';
import pageGuest from 'features/web/index';
import NotFound from 'component/web/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  // const user = useSelector((state) => state.user.current);
  // const isLoggedIn = !!user._id;
  const user = null;
  const showPageGuest = (pages) => {
    if (pages.length > 0) {
      return pages.map((page, index) => <Route key={index} path={page.path} element={page.main} />);
    }
  };
  return (
    <div className="App">
      <Router>
        <Suspense fallback>
          {user !== 'admin' && (
            <DefaultLayout>
              <Routes>
                {showPageGuest(pageGuest)}
                <Route path="/*" element=<NotFound /> exact />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </DefaultLayout>
          )}
          {/* {user.role === 'admin' && (
            <Router>
              <Switch>
                {showPageAdmin(pageAdmin)}
                <Route path="/*" component={NotFoundA} exact />
                <Redirect to="/" from="/" />
              </Switch>
            </Router>
          )} */}
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
