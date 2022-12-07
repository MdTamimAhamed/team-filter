const SignupButton = ({type, color, bgColor, onHoverColor,text}) => {
  return (
    <div className=''>
      <button
        type={type || 'submit'}
        className={`w-[350px] text-center rounded-md py-3 px-4 font-normal bg-configBlue ease-in duration-100
        ${color} ${bgColor} hover:bg-${onHoverColor} hover:text-white`}>
          {text}
      </button>
    </div>
  )
}

export default SignupButton