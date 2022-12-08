import React, { useEffect, useState } from 'react';
import ActionButton from '../reusables/ActionButton';
import ItemsCenterRow from '../reusables/ItemsCenterRow';
import Modal from '../reusables/Modal';
import ModalBody from '../reusables/ModalBody';
import ModalContentWrapper from '../reusables/ModalContentWrapper';
import ModalFooter from '../reusables/ModalFooter';
import ModalTitle from '../reusables/ModalTitle';
import InputHandler from '../InputHandler';
import Select from '../reusables/Select'
import Button from '../reusables/Button'

const UpdatePlayer = ({ id }) => {
  const [open, setOpen] = useState(false);

  const [playerName, setPlayerName] = useState('');
  const [goal,setGoal] = useState();
  const [teamId, setTeamId] = useState();

  useEffect(() => {
    if (open) {
      // Call details /players/:id
    }
  }, [open]);

  async function handleUpdate(e) {
    //
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
            <form className='flex flex-col justify-start'>
              {/* Fields: name, goals; Select: state=teamId; Button: Submit */}
              <div>
                <label>Player Name</label>
                <InputHandler
                  type= 'text'
                  state={playerName}
                  setState ={ setPlayerName}
                  placeholder
                />
              </div>
              <div>
                <label>Goal</label>
                <InputHandler
                  type= 'number'
                  state={goal}
                  setState ={ setGoal}
                  placeholder
                />
              </div>
              <div>
                <label>Select</label>
                <Select 
                  value={teamId}
                  onChange = {setTeamId}
                  tuples = {[]}
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button 
                  type='submit'
                  color = 'text-white'
                  bgColor='bg-primary'
                  children='Submit'
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
            <button
              className='py-1 px-4 text-red-500 bg-gray-300'
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
