import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePagination } from 'use-pagination-hook';
import { request } from '../../api/api';
import { useFetch } from '../../hooks/fetch';
import { IUser } from '../../models/interfaces';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import UserCard from '../UserCard/UserCard';

const UserListContainer = (): JSX.Element => {
  const [data, setData] = useState<IUser[] | null>(null);

  const [fetchUsers, isLoading, isError] = useFetch(async () => {
    const response = await request({
      url: `users`,
      method: 'get',
    });

    setData(response.data);
  });

  const { current, pages, display, next, previous, set } = usePagination({ items: data || [], size: 3 });

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div>{display.length > 0 && display.map((item: IUser) => <UserCard key={item.id} item={item} />)}</div>
      <div className="flex justify-center">
        <Pagination next={next} previous={previous} set={set} current={current} pages={pages} />
      </div>
    </>
  );
};

export default UserListContainer;
