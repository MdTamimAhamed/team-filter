import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../utils/baseURL';
import ItemsCenterRow from '../reusables/ItemsCenterRow';
import DeleteButton from '../reusables/DeleteButton';
import ConfirmationDialog from '../reusables/ConfirmationDialog';

const DeleteTeam = ({ name, id }) => {
  const [open, setOpen] = useState(false);

  async function deleteTeamCall() {
    try {
      await axios.delete(`${baseURL}/teams/${id}`);
      window.location.href = 'http://localhost:3000/teams';
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ItemsCenterRow>
        <DeleteButton onClick={() => setOpen(true)}>Delete</DeleteButton>
      </ItemsCenterRow>

      <ConfirmationDialog
        title={`Delete ${name}?`}
        bodyText='Deleted player cannot be restored!'
        open={open}
        setOpen={setOpen}
        onSave={deleteTeamCall}
      />
    </>
  );
};

export default DeleteTeam;
