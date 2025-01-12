import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';
import AppRoutes from './routes/Router';
import Spinner from './components/common/Spinner';
const App = () => {
  const routing = useRoutes(AppRoutes);
  return (
    <div className="bg-blue-50 dark:bg-transparent">
    <Suspense fallback={<Spinner />}>
      {routing}
    </Suspense>
  </div>
  );
};

export default App;
