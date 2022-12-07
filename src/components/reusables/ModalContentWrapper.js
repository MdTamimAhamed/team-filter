const ModalContentWrapper = ({ width, children }) => {
  return (
    <div
      id='modal-wrapper'
      className={`bg-white ${width} p-4 flex-col overflow-y-auto rounded-md shadow-neutral-700 shadow-md`}
    >
      {children}
    </div>
  );
};

export default ModalContentWrapper;
