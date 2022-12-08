import React, { useEffect, useState } from 'react';
import ActionButton from '../reusables/ActionButton';
import ItemsCenterRow from '../reusables/ItemsCenterRow';
import Modal from '../reusables/Modal';
import ModalBody from '../reusables/ModalBody';
import ModalContentWrapper from '../reusables/ModalContentWrapper';
import ModalFooter from '../reusables/ModalFooter';
import ModalTitle from '../reusables/ModalTitle';
import Button from '../reusables/Button';
import InputHandler from '../InputHandler';
import baseURL from '../../utils/baseURL';
import axios from 'axios';
import TextInput from '../reusables/TextInput';

const UpdateTeam = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    getTeam();
  }, [open]);

  async function getTeam() {
    try {
      const res = await axios.get(`${baseURL}/teams/${id}`);
      const data = res?.data[0];

      setName(data?.name);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const payload = { name };
      await axios.patch(`${baseURL}/teams/${id}`, payload);
      setOpen(false);
      window.location.href = 'http://localhost:3000/teams';
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
            <h1 className='text-xl text-left'>Update Team</h1>
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

export default UpdateTeam;
