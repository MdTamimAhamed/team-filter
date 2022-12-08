import React, { useState } from 'react';
import ActionButton from '../reusables/ActionButton';
import ItemsCenterRow from '../reusables/ItemsCenterRow';
import Modal from '../reusables/Modal';
import ModalBody from '../reusables/ModalBody';
import ModalContentWrapper from '../reusables/ModalContentWrapper';
import ModalFooter from '../reusables/ModalFooter';
import ModalTitle from '../reusables/ModalTitle';
import Button from '../reusables/Button';
import InputHandler from '../InputHandler';

const UpdateTeam = () => {
  const [open, setOpen] = useState(false);
  const [teamName, setTeamName] = useState('');

  return (
    <>
      <ItemsCenterRow>
        <ActionButton onClick={() => setOpen(true)}>Update</ActionButton>
      </ItemsCenterRow>

      <Modal open={open} setOpen={setOpen}>
        <ModalContentWrapper width='lg:w-8/12 sm:w-10/12'>
          <ModalTitle>
            <h1 className='text-xl text-left'>Update Team</h1>
          </ModalTitle>

          <ModalBody>
          <form className='flex flex-col justify-start'>
              {/* Fields: name, goals; Select: state=teamId; Button: Submit */}
              <div>
                <label>Team Name</label>
                <InputHandler
                  type= 'text'
                  state={teamName}
                  setState ={ setTeamName}
                  placeholder
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

export default UpdateTeam;
