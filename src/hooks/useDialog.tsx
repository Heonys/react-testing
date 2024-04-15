import { useState } from 'react';

const useDialog = (initValue = false) => {
  const [isOpen, setIsOpen] = useState(initValue);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, onToggle };
};

export default useDialog;
