const ButtonWithIcon = ({ icon,type, color, bgColor, onClick, onHoverColor, children }) => {
    return (
      <button
        onClick={onClick}
        type={type || 'button'}
        className={`py-2 my-3 px-6 rounded-md shadow-sm shadow-neutral-500 hover:${onHoverColor} ${color} ${bgColor}`}
      >
        <i className={`${icon} pr-2`}></i>
        {children}
      </button>
    );
  };
  
  export default ButtonWithIcon;