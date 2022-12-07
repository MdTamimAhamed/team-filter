const DetailsButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-1 bg-configBlue rounded-md shadow-sm shadow-neutral-400 text-white text-sm font-semibold'
    >
      Details
    </button>
  );
};

export default DetailsButton;
