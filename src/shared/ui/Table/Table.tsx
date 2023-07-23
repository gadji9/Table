import { FunctionComponent, useEffect } from 'react';

import { useSortableTable } from './useSortableTable';

import TableBody from './TableBody';
import TableHead from './TableHead';

import cls from './Table.module.scss';

export type TableData = IPost;
export type TableColumn = {
  label: string;
  accessor: string;
  sortable: boolean;
  sortbyOrder?: string;
};
export type SortOrder = 'asc' | 'desc';

export interface ITableProps {
  data: TableData[];
  columns: TableColumn[];
}

const Table: FunctionComponent<ITableProps> = ({ data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data);

  return (
    <>
      <div className={cls.table_container}>
        <table className={cls.table}>
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} tableData={tableData} />
        </table>
      </div>
    </>
  );
};

export default Table;
