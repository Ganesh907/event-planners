import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';
import Spinner from './components/common/Spinner';
import AppRoutes from './routes/Router';
import { ToastContainer } from 'react-toastify'; // Toast container to show notifications
import "react-toastify/dist/ReactToastify.css"; // Toast CSS import
const App = () => {
  const routing = useRoutes(AppRoutes);
  return (
    <div className="bg-blue-50 dark:bg-transparent">
    <Suspense fallback={<Spinner />}>
    <ToastContainer/>
      {routing}
    </Suspense>
  </div>
  );
};

export default App;
