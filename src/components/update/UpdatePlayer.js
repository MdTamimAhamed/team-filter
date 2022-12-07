import React, { useEffect, useState } from 'react';
import ActionButton from '../reusables/ActionButton';
import ItemsCenterRow from '../reusables/ItemsCenterRow';
import Modal from '../reusables/Modal';
import ModalBody from '../reusables/ModalBody';
import ModalContentWrapper from '../reusables/ModalContentWrapper';
import ModalFooter from '../reusables/ModalFooter';
import ModalTitle from '../reusables/ModalTitle';

const UpdatePlayer = ({ id }) => {
  const [open, setOpen] = useState(false);

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
            <form>
              {/* Fields: name, goals; Select: state=teamId; Button: Submit */}
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
