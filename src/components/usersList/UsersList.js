import { useEffect } from 'react';

import User from '../userComponent/User';
import config from '../../constants';
import './userList.css';

const UsersList = ({
  users,
  deleteUser,
  editUser,
  saveUser,
  selectAll,
  selectOne,
  selectAllRef,
  setPage,
  page,
}) => {
  useEffect(() => {
    if (users.length === 0 && page > 1) {
      setPage(page - 1);
    }
  }, [page, setPage, users.length]);
  let fillRows = [];
  for (
    let i = users.filter((user) => user.show).length;
    i < config.PAGE_SIZE;
    i++
  ) {
    fillRows.push(<tr key={i}></tr>);
  }

  if (users.length === 0 && page === 1) {
    return <div>NO USERS IN THE SYSTEM</div>;
  }
  return (
    <table className={'table'}>
      <thead>
        <tr>
          <th>
            <input
              type='checkbox'
              ref={selectAllRef}
              onChange={(e) => {
                selectAll(e);
              }}
              name='selectAll'
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return user.show ? (
            <User
              selectOne={selectOne}
              saveUser={saveUser}
              editUser={editUser}
              deleteUser={deleteUser}
              key={user.id}
              user={user}
            ></User>
          ) : (
            ''
          );
        })}
        {fillRows}
      </tbody>
    </table>
  );
};

export default UsersList;
