import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalContentWrapper from './ModalContentWrapper';
import ModalFooter from './ModalFooter';
import ModalTitle from './ModalTitle';

const ConfirmationDialog = ({ open, setOpen, title, bodyText, onSave }) => {
  return (
    <Modal open={open} setOpen>
      <ModalContentWrapper width='6/12'>
        <ModalTitle>
          <h1 className='text-xl'>{title}</h1>
        </ModalTitle>
        <ModalBody>
          <p>{bodyText}</p>
        </ModalBody>
        <ModalFooter>
          <div className='flex space-x-2 justify-end my-2'>
            <button
              className='text-configRed bg-slate-100 p-4 py-2'
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <button
              className='text-white bg-green-500 p-4 py-2'
              onClick={() => onSave()}
            >
              Save
            </button>
          </div>
        </ModalFooter>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ConfirmationDialog;
