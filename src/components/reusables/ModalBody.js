const ModalBody = ({ onClose, children }) => {
  return (
    <div id='modal-body' className='flex-col flex-wrap my-2 relative'>
      {children}
    </div>
  );
};

export default ModalBody;
