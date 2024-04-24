import ErrorPage from '@/pages/ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';

const RootErrorBoundary = ({ children }: React.PropsWithChildren) => {
  return <ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>;
};

export default RootErrorBoundary;
