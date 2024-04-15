import { Suspense } from 'react';

const RootSuspense = ({ children }: React.PropsWithChildren) => {
  return <Suspense fallback={<div>로딩중...</div>}>{children}</Suspense>;
};

export default RootSuspense;
