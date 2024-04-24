import { Outlet } from 'react-router-dom';
import { RootSuspense, RootErrorBoundary } from './providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RootErrorBoundary>
      <RootSuspense>
        <Outlet />
        <ToastContainer />
      </RootSuspense>
    </RootErrorBoundary>
  );
}

export default App;
