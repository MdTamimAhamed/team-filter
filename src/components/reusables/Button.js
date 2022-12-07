const Button = ({ type, color, bgColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      className={`py-2 my-2 px-6 rounded-md shadow-sm shadow-neutral-500 ${color} ${bgColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
