import { FunctionComponent, useEffect, useState } from 'react';

import classNames from 'classnames';

import ArrowRight from 'shared/assets/icons/right-arrow.png';
import ArrowLeft from 'shared/assets/icons/left-arrow.png';

import cls from './Table.module.scss';

interface IPagination {
  totalPages: number;
  setPage: (page: number) => void;
  activePage: number;
  disabled?: boolean;
  alignment?: 'justify-end' | 'justify-start';
}

const Pagination: FunctionComponent<IPagination> = ({
  totalPages = 1,
  setPage,
  disabled = false,
  activePage = 1,
  alignment = 'justify-start',
}) => {
  const [paginationContent, setPaginationContent] = useState<Array<number>>([]);

  const paginationClick = (pageNum: number) => {
    if (
      disabled ||
      pageNum === activePage ||
      pageNum > totalPages ||
      pageNum < 1 ||
      Math.abs(activePage - pageNum) != 1
    ) {
      return;
    }

    setPage(pageNum);
  };

  useEffect(() => {
    const paginationUpdate: Array<number> = [];

    if (totalPages <= 8) {
      for (let i = 1; i <= totalPages; i++) {
        paginationUpdate.push(i);
      }
    } else if (activePage <= 3) {
      for (let i = 1; i <= 5; i++) {
        paginationUpdate.push(i);
      }

      paginationUpdate.push(NaN, totalPages);
    } else if (activePage >= totalPages - 4) {
      paginationUpdate.push(1, NaN);

      for (let i = totalPages - 4; i <= totalPages; i++) {
        paginationUpdate.push(i);
      }
    } else {
      paginationUpdate.push(
        1,
        NaN,
        activePage - 1,
        activePage,
        activePage + 1,
        NaN,
        totalPages,
      );
    }
    setPaginationContent(paginationUpdate);
  }, [totalPages, activePage]);

  return (
    <div className={classNames(cls.paginationWrapper, [alignment])}>
      <div
        className={classNames(cls.arrow, {
          [cls.fadeArrow]: activePage === 1,
        })}
        onClick={() => paginationClick(activePage - 1)}
      >
        Назад
      </div>
      <div className={cls.paginationPagesWrapper}>
        {paginationContent.map((pageNum, index) =>
          isNaN(pageNum) ? (
            <div key={index} className={classNames(cls.space)}>
              ...
            </div>
          ) : (
            <div
              key={index}
              onClick={() => paginationClick(pageNum)}
              className={classNames(cls.paginationPage, {
                [cls.activePage]: pageNum === activePage,
                [cls.cliclable]: Math.abs(activePage - pageNum) === 1,
                [cls.fadePage]: disabled,
              })}
            >
              {pageNum}
            </div>
          ),
        )}
      </div>

      <div
        className={classNames(cls.arrow, {
          [cls.fadeArrow]: activePage === totalPages,
        })}
        onClick={() => paginationClick(activePage + 1)}
      >
        Далее
      </div>
    </div>
  );
};

export default Pagination;
