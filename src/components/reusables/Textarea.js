const Textarea = ({ placeHolder, value, onChange, required, helperText }) => {
  return (
    <div className='mt-6'>
      <span className='text-red-500 text-xs font-semibold'>
        {required ? 'Required *' : null}
      </span>
      <textarea
        className='w-full py-2 px-4 bg-configLightGray disabled:cursor-not-allowed'
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeHolder}
      ></textarea>
      <span className='text-red-600 text-sm font-semibold'>{helperText}</span>
    </div>
  );
};

export default Textarea;
