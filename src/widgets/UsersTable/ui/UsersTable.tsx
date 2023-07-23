import { FunctionComponent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import cls from './UsersTable.module.scss';
import Table from 'shared/ui/Table/Table';
import Input from 'shared/ui/Input/Input';
import Pagination from 'shared/ui/Table/Pagination';
import { useAppDispatch, useAppSelector } from 'app/store';
import { useQuery } from 'react-query';
import { setIsLoadingReducer } from 'widgets/PageLoader/model';
import { fetchPosts, setPostsReducer } from 'entities/Post';

const POSTS_PER_PAGE = 10;

interface IUsersTableProps {
  className?: string;
}

const columns = [
  { label: 'ID', accessor: 'id', sortable: true },
  { label: 'ID юзера', accessor: 'userId', sortable: false },
  {
    label: 'Описание',
    accessor: 'title',
    sortable: true,
  },
  { label: 'Контент', accessor: 'body', sortable: true },
];

const UsersTable: FunctionComponent<IUsersTableProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);

  const [page, setPage] = useState<number>(Number(searchParams.get('page')));
  const [tableData, setTabledata] = useState<IPost[]>([]);

  const { data, isLoading } = useQuery(['posts', page], () =>
    fetchPosts(page, POSTS_PER_PAGE),
  );

  useEffect(() => {
    setTabledata(data);
    dispatch(setPostsReducer(data));
  }, [data]);

  useEffect(() => {
    dispatch(setIsLoadingReducer(isLoading));
  }, [isLoading]);

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  };

  const onSearch = (val: string) => {
    const newTableData = posts.filter((cell) => {
      return (
        cell.body.includes(val) ||
        cell.title.includes(val) ||
        cell.id.toString().includes(val) ||
        cell.userId.toString().includes(val)
      );
    });

    setTabledata(newTableData);
  };

  return (
    <div className={classNames(cls.UsersTable)}>
      <div className={classNames(cls.inputWrapper)}>
        <Input onType={onSearch} />
      </div>
      <Table data={tableData} columns={columns} />
      <Pagination totalPages={10} setPage={onPageChange} activePage={page} />
    </div>
  );
};

export default UsersTable;
