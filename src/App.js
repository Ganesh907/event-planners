import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';
import Spinner from './components/common/Spinner';
import AppRoutes from './routes/Router';
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
