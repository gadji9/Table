import { FunctionComponent, useEffect, useState } from 'react';
import { SortOrder, TableColumn } from './Table';
import classnames from 'classnames';
import cls from './Table.module.scss';
import { useAppSelector } from 'app/store';

interface ITableHeadProps {
  columns: TableColumn[];
  handleSorting: (accessor: string, sortOrder: SortOrder) => void;
}

const TableHead: FunctionComponent<ITableHeadProps> = ({
  columns,
  handleSorting,
}) => {
  const posts = useAppSelector((state) => state.posts.posts);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    setSortField('');
  }, [posts]);

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          return (
            <th
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
            >
              <div className={cls.headCell}>
                {label}
                <div
                  className={classnames({
                    [cls.up]: sortField === accessor && order === 'asc',
                    [cls.down]: sortField === accessor && order === 'desc',
                    [cls.default]: sortField !== accessor && sortable,
                  })}
                ></div>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
