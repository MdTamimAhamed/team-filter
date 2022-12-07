const ButtonCancel = ({ onCancel, text }) => {
  return (
    <button
      onClick={onCancel}
      className='py-2 px-4 w-full bg-red-500 text-white shadow-sm shadow-neutral-500'
    >
      {text || 'Cancel'}
    </button>
  );
};

export default ButtonCancel;
