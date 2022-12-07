const TabItem = ({ tabIndex, children, current }) => {
  return (
    <div
      className={`duration-500 ${
        current === tabIndex ? 'block w-full' : 'hidden'
      }`}
    >
      {children}
    </div>
  );
};

export default TabItem;
