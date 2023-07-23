import { FunctionComponent, Suspense } from 'react';
import cl from './styles/index.module.scss';

import AppRouter from './providers/router/ui/AppRouter';
import Navbar from 'widgets/Navbar/ui/Navbar';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useAppSelector } from './store';

const App: FunctionComponent = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoading);

  return (
    <div className={cl.app}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className={cl['content-page']}>
          {isLoading && <PageLoader />}
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
