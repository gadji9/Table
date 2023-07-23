import { useEffect, useState } from 'react';
import { SortOrder, TableData } from './Table';

export const useSortableTable = (
  data: TableData[],
): [TableData[], (sortField: string, sortOrder: SortOrder) => void] => {
  const [tableData, setTableData] = useState<TableData[]>();

  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  const handleSorting = (sortField: string, sortOrder: SortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField as keyof TableData] === null) return 1;
        if (b[sortField as keyof TableData] === null) return -1;
        if (
          a[sortField as keyof TableData] === null &&
          b[sortField as keyof TableData] === null
        )
          return 0;

        return (
          a[sortField as keyof TableData]
            .toString()
            .localeCompare(b[sortField as keyof TableData].toString(), 'en', {
              numeric: true,
            }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return [tableData, handleSorting];
};
