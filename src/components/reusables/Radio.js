const Radio = ({ value, state, onChange, label }) => {
  return (
    <div className='my-2'>
      <input
        type='radio'
        checked={value === state}
        value={value}
        onChange={e => onChange(e.target.value)}
        className='mr-2'
      />
      <label className=''>{label}</label>
    </div>
  );
};

export default Radio;
