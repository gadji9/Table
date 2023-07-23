import { InputHTMLAttributes, FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import cls from './Input.module.scss';
import MagnifyingGlass from 'shared/assets/icons/MagnifyingGlass';
import debounce from 'shared/lib/debounce/debounce';

export enum ThemeInput {
  SEARCH = 'search',
}

const DefaultPlaceholders = {
  search: 'Поиск',
};

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  theme?: ThemeInput;
  placeholder?: string;
  onType: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FunctionComponent<IInputProps> = ({
  className,
  theme = ThemeInput.SEARCH,
  placeholder = DefaultPlaceholders[theme],
  value,
  onType,
  ...otherProps
}) => {
  const debounceOnChange = debounce(onType);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceOnChange(e.target.value);
  };

  return (
    <div className={classNames(cls.inputWrapper, [className, cls[theme]])}>
      <input
        className={classNames(cls.Input)}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      <div className={classNames(cls.magnifyingGlass)}>
        <MagnifyingGlass />
      </div>
    </div>
  );
};

export default Input;
