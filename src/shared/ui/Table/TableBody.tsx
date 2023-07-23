import { FunctionComponent } from 'react';
import { TableColumn, TableData } from './Table';

interface ITableBody {
  tableData: TableData[];
  columns: TableColumn[];
}

const TableBody: FunctionComponent<ITableBody> = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData?.map((data) => {
        return (
          <tr key={data.id}>
            {columns?.map(({ accessor }) => {
              const tData = data[accessor as keyof TableData]
                ? data[accessor as keyof TableData]
                : '——';
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
