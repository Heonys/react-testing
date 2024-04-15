import { pageRoutes } from '@/routes/path';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pageRoutes.main, { replace: true });
  };

  return (
    <div>
      <div>NotFoundPage</div>
      <button onClick={handleClick}>홈으로 가기</button>
    </div>
  );
};

export default NotFoundPage;
