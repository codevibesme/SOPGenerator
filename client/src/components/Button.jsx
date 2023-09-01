import { useNavigate } from "react-router-dom";

const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {

    const navigate = useNavigate();
   
  const genSop =()=>{
    navigate('/sop');
  }
    return (
      <button
      onClick={()=> genSop()}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:scale-105 hover:shadow-md hover:shadow-blue-700/80 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-gradient-to-tr from-blue-400 to-blue-950  text-white border-[#007bff] "
      } rounded-full ${fullWidth && "w-full"}`}
    >
          {label}
         { iconURL &&<img 
              src={iconURL}
              alt="arrow right"
              className="ml-2 rounded-full w-5 h-5"
          />}
      </button>
    )
  }
  
  export default Button