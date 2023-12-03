import { useRef } from 'react';
import './user.css';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const User = ({ user, deleteUser, editUser, saveUser, selectOne }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);

  return (
    <tr key={user.id} className={user.selected ? 'selected' : ''}>
      <td>
        <label for={`check-${user.id}`}>
          <input
            id={`check-${user.id}`}
            type='checkbox'
            data={`${user.selected}`}
            onChange={() => selectOne(user.id)}
            checked={user.selected}
          />
        </label>
      </td>
      <td>
        <input
          className={user.edit ? 'editable' : 'readOnly'}
          readOnly={!user.edit}
          type='text'
          ref={nameRef}
          name='name'
          defaultValue={user.name}
        />
      </td>
      <td>
        <input
          className={user.edit ? 'editable' : 'readOnly'}
          readOnly={!user.edit}
          type='email'
          ref={emailRef}
          name='email'
          defaultValue={user.email}
        />
      </td>
      <td>
        <input
          className={user.edit ? 'editable' : 'readOnly'}
          readOnly={!user.edit}
          type='text'
          ref={roleRef}
          name='role'
          defaultValue={user.role}
        />
      </td>
      <td className={'icons'}>
        {user.edit ? (
          <CheckBoxRoundedIcon
            onClick={() => saveUser(user.id, nameRef, emailRef, roleRef)}
            className='fas fa-save'
            sx={{ color: 'green' }}
          />
        ) : (
          <BorderColorRoundedIcon
            onClick={() => editUser(user.id)}
            className='fas fa-edit'
            sx={{ color: 'gray' }}
          />
        )}

        <DeleteRoundedIcon
          onClick={() => deleteUser(user.id)}
          className='fas fa-trash-alt'
          sx={{ color: 'red' }}
        />
      </td>
    </tr>
  );
};

export default User;
