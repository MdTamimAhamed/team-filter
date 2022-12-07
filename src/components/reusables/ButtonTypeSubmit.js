const ButtonTypeSubmit = ({ type }) => {
  return (
    <div className='mt-4'>
      <button
        type={type || 'submit'}
        className='w-full text-center text-white py-2 px-4 font-bold shadow-lg bg-configBlue'
      >
        SIGN UP
      </button>
    </div>
  );
};

export default ButtonTypeSubmit;
