const TabHeader = ({ current, setCurrent, headList }) => {
  return (
    <div className='flex w-full bg-slate-200 text-slate-600'>
      <ul className='list-none flex w-full'>
        {headList?.map((head, index) => (
          <li
            key={index}
            className={`${
              current === index ? 'bg-configBlue text-white' : 'text-slate-700'
            } py-2`}
          >
            <a
              tabIndex={index}
              onClick={e => setCurrent(parseInt(e.target.tabIndex))}
              className='px-4 duration-300 cursor-pointer'
            >
              {head}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabHeader;
