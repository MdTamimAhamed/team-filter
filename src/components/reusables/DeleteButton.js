const DeleteButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='py-1 px-4 bg-red-500 text-white text-sm rounded-md shadow-sm shadow-neutral-300'
    >
      {children}
    </button>
  );
};

export default DeleteButton;
