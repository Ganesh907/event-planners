// import React, { Suspense } from 'react';
// import { useRoutes } from 'react-router';
// import Spinner from './components/common/Spinner';
// import AppRoutes from './routes/Router';
// import { ToastContainer } from 'react-toastify'; // Toast container to show notifications
// import "react-toastify/dist/ReactToastify.css"; // Toast CSS import
// const App = () => {
//   const routing = useRoutes(AppRoutes);
//   return (
//     <div className="bg-blue-50 dark:bg-transparent">
//     <Suspense fallback={<Spinner />}>
//     <ToastContainer/>
//       {routing}
//     </Suspense>
//   </div>
//   );
// };

// export default App;
// src/App.js
import React, { Suspense } from "react";
import { useRoutes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/Store";
import AppRoutes from "./routes/Router";
import Spinner from "./components/common/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const routing = useRoutes(AppRoutes);
  
  return (
    <Provider store={store}>
      <div className="bg-blue-50 dark:bg-transparent">
        <Suspense fallback={<Spinner />}>
          <ToastContainer />
          {routing}
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
