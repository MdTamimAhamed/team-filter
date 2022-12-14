const TextInput = ({
  value,
  onChange,
  placeholder,
  type,
  disabled,
  required,
  helperText
}) => {
  return (
    <div className='mt-6'>
      <span className='text-red-500 text-xs font-semibold'>
        {required ? 'Required *' : null}
      </span>
      <input
        required={required}
        className='max-h-max w-full py-2 px-4 bg-slate-300 disabled:cursor-not-allowed'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      />
      <span className='text-red-600 text-sm font-semibold'>{helperText}</span>
    </div>
  );
};

export default TextInput;
