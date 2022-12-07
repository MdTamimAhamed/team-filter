const Checkbox = ({ checked, onChange, state, label }) => {
  return (
    <div className='my-2'>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => onChange(!state)}
        className='mr-2'
      />
      <label className=''>{label}</label>
    </div>
  );
};

export default Checkbox;
