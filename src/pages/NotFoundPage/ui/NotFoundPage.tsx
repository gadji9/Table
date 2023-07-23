import { FunctionComponent } from 'react';

import classNames from 'classnames';

import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FunctionComponent<INotFoundPageProps> = ({
  className,
}) => {
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
};
