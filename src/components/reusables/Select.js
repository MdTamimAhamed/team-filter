const Select = ({ value, onChange, tuples, title }) => {
  return (
    <div className='w-full mt-6'>
      <select
        onChange={e => onChange(e.target.value)}
        value={value}
        className='py-2 px-4 bg-slate-300 w-full'
      >
        <option value='' className=''>
          {title || '---Select---'}
        </option>

        {tuples.map(tuple => (
          <option value={tuple.value} key={tuple.value} className=''>
            {tuple.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
