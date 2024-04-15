import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>ErrorPage</div>
      <button onClick={handleClick}>뒤로 가기</button>
    </div>
  );
};

export default ErrorPage;
