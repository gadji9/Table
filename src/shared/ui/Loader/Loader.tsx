import { FunctionComponent } from 'react';
import cls from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FunctionComponent<ILoaderProps> = ({ className }) => {
  return (
    <div className={cls['lds-ellipsis']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
