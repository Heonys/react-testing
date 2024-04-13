import cn from 'classnames';
import { useState } from 'react';


type Props = {
  placeholder?: string;
  className?: string;
  onFocus?: () => void;
  onChange?: (param: unknown) => void;
  onEnter?: (param: unknown) => void;
};

export default function TextField({ placeholder, className, onFocus, onChange, onEnter }: Props) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const changeValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
    onChange?.(ev.target.value);
  };
  const focus = () => {
    setFocused(true);
    onFocus?.();
  };
  const blur = () => {
    setFocused(false);
  };
  const pressEnter = (ev: React.KeyboardEvent) => {
    if (ev.key === 'Enter' && !ev.nativeEvent.isComposing) {
      ev.preventDefault();
      onEnter?.(value);
    }
  };

  return (
    <input
      type="text"
      className={cn('text-input', className)}
      onChange={changeValue}
      onFocus={focus}
      onBlur={blur}
      onKeyDown={pressEnter}
      placeholder={placeholder || '텍스트를 입력해 주세요.'}
      value={value}
      style={focused ? { borderWidth: 2, borderColor: 'rgb(25, 118, 210)' } : undefined}
    />
  );
}
