import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseURL from '../../utils/baseURL';
import ActionButton from '../reusables/ActionButton';
import ItemsCenterRow from '../reusables/ItemsCenterRow';
import Modal from '../reusables/Modal';
import ModalBody from '../reusables/ModalBody';
import ModalContentWrapper from '../reusables/ModalContentWrapper';
import ModalFooter from '../reusables/ModalFooter';
import ModalTitle from '../reusables/ModalTitle';
import Select from '../reusables/Select';
import TextInput from '../reusables/TextInput';

const CreatePlayer = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [goals, setGoals] = useState('');
  const [teamId, setTeamId] = useState('');

  // teams
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (open) getTeams();
  }, [open]);

  async function getTeams() {
    try {
      const res = await axios.get(`${baseURL}/teams`);
      setTeams([...res?.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function createPlayer(e) {
    e.preventDefault();

    try {
      const payload = { name, team_id: teamId, goal_scored: goals },
        URL = `${baseURL}/players`;
      const res = await axios.post(URL, payload);
      window.location.href = 'http://localhost:3000/players';
    } catch (err) {
      console.log(err);
      return;
    }
  }

  return (
    <>
      <div className='w-full'>
        <ActionButton onClick={() => setOpen(true)}>Create New</ActionButton>
      </div>

      <Modal open={open} setOpen={setOpen}>
        <ModalContentWrapper width='lg:w-8/12 sm:w-10/12'>
          <ModalTitle>
            <h1 className='text-xl text-left'>Add new Player</h1>
          </ModalTitle>
          <ModalBody>
            <form onSubmit={createPlayer}>
              <TextInput
                value={name}
                onChange={setName}
                placeholder='Name'
                required
              />
              <TextInput
                value={goals}
                onChange={setGoals}
                placeholder='Goals'
                required
              />
              <Select
                required
                value={teamId}
                onChange={setTeamId}
                tuples={teams.map(team => ({
                  value: team.id,
                  name: team.name
                }))}
              ></Select>

              <button
                type='submit'
                className='w-full py-2 px-4 bg-green-500 text-white shadow-md shadow-neutral-400 mt-6'
              >
                Submit
              </button>
            </form>
          </ModalBody>

          <ModalFooter>
            <button
              className='py-2 px-4 text-white bg-red-500 w-full'
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </ModalFooter>
        </ModalContentWrapper>
      </Modal>
    </>
  );
};

export default CreatePlayer;
