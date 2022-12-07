const Select = ({ value, onChange, tuples, title }) => {
  return (
    <select onChange={e => onChange(e.target.value)} value={value} className=''>
      <option value='' className=''>
        {title || '---Select---'}
      </option>

      {tuples.map(tuple => (
        <option value={tuple.value} key={tuple.value} className=''>
          {tuple.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
