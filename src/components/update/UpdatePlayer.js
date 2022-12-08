import React, { useEffect, useState } from 'react';
import ActionButton from '../reusables/ActionButton';
import ItemsCenterRow from '../reusables/ItemsCenterRow';
import Modal from '../reusables/Modal';
import ModalBody from '../reusables/ModalBody';
import ModalContentWrapper from '../reusables/ModalContentWrapper';
import ModalFooter from '../reusables/ModalFooter';
import ModalTitle from '../reusables/ModalTitle';
import InputHandler from '../InputHandler';
import Select from '../reusables/Select';
import Button from '../reusables/Button';
import TextInput from '../reusables/TextInput';
import baseURL from '../../utils/baseURL';
import axios from 'axios';

const UpdatePlayer = ({ id }) => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [goals, setGoals] = useState('');
  const [teamId, setTeamId] = useState('');

  useEffect(() => {
    if (open) {
      getPlayer();
    }
  }, [open]);

  async function getPlayer() {
    try {
      const res = await axios.get(`${baseURL}/players/${id}`);

      const playerData = res?.data[0];
      setName(playerData.name);
      setGoals(playerData.goals);
      setTeamId(playerData.team_id);
    } catch (err) {
      console.log(err);
    }
  }

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

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const payload = {
        name: name,
        goal_scored: goals,
        team_id: teamId
      };

      await axios.patch(`${baseURL}/players/${id}`, payload);
      setOpen(false);
      window.location.href = 'http://localhost:3000/players';
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ItemsCenterRow>
        <ActionButton onClick={() => setOpen(true)}>Update</ActionButton>
      </ItemsCenterRow>

      <Modal open={open} setOpen={setOpen}>
        <ModalContentWrapper width='lg:w-8/12 sm:w-10/12'>
          <ModalTitle>
            <h1 className='text-xl text-left'>Update Player</h1>
          </ModalTitle>
          <ModalBody>
            <form
              onSubmit={handleUpdate}
              className='flex flex-col justify-start text-left'
            >
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

export default UpdatePlayer;
