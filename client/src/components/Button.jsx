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
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-indigo-950 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-[#007bff]  text-white border-[#007bff] "
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