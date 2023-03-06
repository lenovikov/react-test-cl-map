import React from 'react';
import { IUser } from '../../models/interfaces';

type Item = {
  item: IUser;
};

const UserCard = ({ item }: Item): JSX.Element => {
  const { image_ref, name, midname, surname } = item;

  return (
    <div className="px-8 py-2">
      <div className="flex items-center border-2 border-slate-400">
        <img className="w-16 mx-4" src={image_ref} alt="" />
        <p className="px-1 w-44 justify-center break-words">{name}</p>
        <p className="px-1 w-44 justify-center break-words">{midname}</p>
        <p className="px-1 w-44 justify-center break-words">{surname}</p>
      </div>
    </div>
  );
};

export default UserCard;
