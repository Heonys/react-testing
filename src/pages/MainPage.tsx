import useDialog from '@/hooks/useDialog';

const MainPage = () => {
  const { isOpen, onToggle } = useDialog();

  return (
    <div>
      <button onClick={onToggle}>토글</button>
      {isOpen && <div>열림</div>}
    </div>
  );
};

export default MainPage;
