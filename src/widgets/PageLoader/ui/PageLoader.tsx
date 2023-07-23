import { FunctionComponent } from 'react';
import classNames from 'classnames';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FunctionComponent<IPageLoaderProps> = ({
  className,
}) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
